import * as PT from "prop-types";

const Card = ({title, children, counter, onClick}) => (
    <div onClick={onClick} className="border p-2 m-4 shadow-md max-w-64 hover:bg-slate-50">
        <h4>{title}</h4>
        <p className="text-sm">Counter : {counter}</p>
        <p className="text-sm">{children}</p>
    </div>
)

Card.protoTypes = {
    title: PT.string.isRequired,
    children: PT.node,
    counter:PT.number,
    onClick: PT.func
}

export default Card;