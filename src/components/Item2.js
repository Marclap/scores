export default function Item2({ dato }) {
    return (
        <>
            <tr className="border-2 border-slateBorder hover:bg-verdeFondo">
                <th className="itemTabla flex items-center">
                    <span className="ml-3 font-bold text-xl text-negro">
                        {dato.dia}
                    </span>
                </th>
                <td className="itemTabla text-xl text-center font-extrabold">
                    {dato.score}
                </td>
            </tr>
        </>
    )
}
