export default function GenericBtn({ text, type }) {
    return (
        <>
            <button type={text} className="bg-[#30865D] p-2 text-white text-lg rounded-lg mx-1">{text}</button>
        </>
    )
}