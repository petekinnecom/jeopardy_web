import { fetchRandomGame } from "../../app/api/comms"

describe("api/comms", ()=>{
  describe("fetchRandomGame", ()=>{
    it("returns the promise of a random game", (done)=>{
      const response = new window.Response('{"dummy": "board"}', {
        status: 200,
        headers: {
          "Content-type": "application/json"
        }
      })

      const jsonPromise = Promise.resolve(response)
      const fetchSpy = spyOn(window, "fetch").and.returnValue(jsonPromise)

      spyOn(Math, "random").and.returnValue(0.5)
      fetchRandomGame([]).then((response)=>{
        expect(fetchSpy).toHaveBeenCalledWith("/shows/1820")
        expect(response).toEqual({dummy: "board"})
        done()
      })
    })

    it("does not choose an already occurred game", (done)=>{
      const response = new window.Response('{"dummy": "board"}', {
        status: 200,
        headers: {
          "Content-type": "application/json"
        }
      })

      const jsonPromise = Promise.resolve(response)
      const fetchSpy = spyOn(window, "fetch").and.returnValue(jsonPromise)

      spyOn(Math, "random").and.returnValue(0.5)
      fetchRandomGame([1820]).then((response)=>{
        expect(fetchSpy).toHaveBeenCalledWith("/shows/1821")
        done()
      })
    })
  })
})
