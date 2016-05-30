# One time use script, so it's left hackish

require 'json'
require 'benchmark'

@show_id = 0
VALUE_REGEX = /^\$/
QUESTION_START_REGEX = /^'/
QUESTION_END_REGEX = /'$/

def new_game(games, raw_challenge)
  game = {
    "showNumber" => raw_challenge["show_number"],
    "airDate" => raw_challenge["air_date"],
    "id" => @show_id += 1,
    "rounds" => [
      {
        "name" => "Jeopardy!",
        "categories" => [],
      },
      {
        "name" => "Double Jeopardy!",
        "categories" => [],
      },
      {
        "name" => "Final Jeopardy!",
        "categories" => [],
      },
    ],
  }
  games << game
  game
end

def new_round(game, raw_challenge)
  round = {
    "name" => raw_challenge["round"],
    "categories" => [],
  }
  game["rounds"] << round
  round
end

def new_category(round, raw_challenge)
  category = {
    "name" => raw_challenge["category"],
    "challenges" => [],
  }
  round["categories"] << category
  category
end


def new_challenge(category, raw_challenge)
  challenge = {
    "question" => raw_challenge["question"].sub(QUESTION_START_REGEX, "").sub(QUESTION_END_REGEX, ""),
    "answer" => raw_challenge["answer"],
    "value" => raw_challenge["value"] && raw_challenge["value"].sub(VALUE_REGEX, "").to_i
  }
  category["challenges"] << challenge
  category["challenges"].sort_by! {|c| c["value"]}
  challenge
end


time = Benchmark.measure do

  raw = File.read("/home/pete/Downloads/JEOPARDY_QUESTIONS1.json")
  raw_challenges = JSON.parse(raw)

  games = []

  count = 0
  total_count = raw_challenges.size
  raw_challenges.each do |raw_challenge|
    game = games.find {|g| g["showNumber"] == raw_challenge["show_number"]} || new_game(games, raw_challenge)
    round = game["rounds"].find {|r| r["name"] == raw_challenge["round"]} || new_round(game, raw_challenge)
    category = round["categories"].find {|c| c["name"] == raw_challenge["category"]} || new_category(round, raw_challenge)
    challenge = category["challenges"].find {|ch| ch["value"] == raw_challenge["value"]} || new_challenge(category, raw_challenge)
    puts "#{count}/#{total_count}"
    count +=1
  end

  games.each do |game|
    File.open("./shows/#{game["id"]}", "w") do |f|
      f.puts game.to_json
    end
  end
end

puts time
