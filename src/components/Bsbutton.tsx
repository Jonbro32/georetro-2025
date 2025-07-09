interface Prop {
    color: 'primary'| 'secondary'|'danger';
    onClick: () => void;
    text:string;
}


const BsButton = ({color,text,onClick}:Prop) => {



    return (
        <button type="button" className={'btn btn-' + color} onClick={onClick}>{text}</button>
    )
}

export default BsButton;