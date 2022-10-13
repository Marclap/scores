import Item2 from './Item2'

export default function Deathmatch() {
    const dataDeathmacth = [
        { dia: 1, score: '26/25' },
        { dia: 2, score: '20/21' },
        { dia: 3, score: '37/25' },
    ]
    return (
        <section className="relative py-4 bg-cyanFondo">
            <div className="w-full mb-4 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded bg-verdeFondo2 border-2 border-negro">
                    <div className="rounded-t mb-0 px-4 py-4 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-bold text-3xl text-center">
                                    DEATHMATCH
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparente overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="px-3 cabeceraHeadTable text-left">
                                        Día
                                    </th>
                                    <th className="px-3 cabeceraHeadTable">
                                        Score
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataDeathmacth.map((dato, i) => {
                                    return <Item2 dato={dato} key={i} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
