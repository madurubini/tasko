import {render,screen} from "@testing-library/react"
import { Input } from "@chakra-ui/input"

describe("Input Component", ()=>{
    test("should be able to render input", ()=>{
        render(<Input placeholder="Email"/>)

        const answer = screen.getByPlaceholderText("Email")
        expect(answer).toBeTruthy()
    })

})