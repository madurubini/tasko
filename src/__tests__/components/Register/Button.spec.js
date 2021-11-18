import { render,screen } from "@testing-library/react";
import { Button } from "@chakra-ui/button";

describe("Button Component", ()=>{
    test("should be able to render RegisterButton", ()=>{
        render(<Button />)

        const children = screen.getByRole("button",{Name:/registrar/i,type:"submit"})
        expect(children).toBeInTheDocument()
    })
})