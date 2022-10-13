export default function Item({ dato }) {
    return (
        <>
            <tr className="border-2 border-slateBorder hover:bg-verdeFondo">
                <th className="itemTabla text-left flex items-center">
                    <span className="ml-3 font-bold text-xl text-negro">
                        {dato.name}
                    </span>
                </th>
                <td className="itemTabla text-xl text-center font-extrabold">
                    {dato.dia1}
                </td>
                <td className="itemTabla text-xl text-center font-extrabold">
                    {dato.dia2}
                </td>
                <td className="itemTabla text-xl text-center font-extrabold">
                    {dato.dia3}
                </td>
            </tr>
        </>
    )
}
