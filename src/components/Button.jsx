import * as PT from "prop-types";
import {cn} from "@/lib/utils";

const colors = {
    "blue": "bg-blue-500 hover:bg-blue-700 text-white border-blue-700",
    "red":"bg-red-500 hover:bg-red-700 text-white border-red-700",
    "green":"bg-green-500 hover:bg-green-700 text-white border-green-700"
}

const Button = ({children, onClick, color}) => (
    <button onClick={onClick} className={cn("font-bold py-2 px-4 border rounded", colors[color])}>
        {children}
    </button>
)

Button.protoTypes = {
    children: PT.string.isRequired,
    onClick: PT.func
}

export default Button