import { render,screen } from "@testing-library/react";
import { Button } from "@chakra-ui/button";

describe("Button Component", ()=>{
    test("should be able to render LoginButton", ()=>{
        render(<Button />)

        const children = screen.getByRole("button",{Name:/entrar/i,type:"submit"})
        expect(children).toBeInTheDocument()
    })
})