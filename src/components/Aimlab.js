import Item from './Item'

export default function Aimlab() {
    const data = [
        { name: 'Detection', dia1: 44839 },
        { name: 'Decisionshot', dia1: 52341 },
        { name: 'Pentakill', dia1: 92677 },
        { name: 'Spidershot', dia1: 63068 },
        { name: 'Microshot', dia1: 43928 },
        { name: 'Spidershot', dia1: 51568 },
        { name: 'Microshot', dia1: 54668 },
        { name: 'Strafetrack', dia1: 55340 },
        { name: 'Circletrack', dia1: 50810 },
        { name: 'Circleshot', dia1: 76979 },
        { name: 'Switchtrack', dia1: 61533 },
        { name: 'Strafeshot', dia1: 60817 },
        { name: 'Strafetrack', dia1: 52696 },
        { name: 'Spidershot', dia1: 56285 },
        { name: 'Microshot', dia1: 51016 },
        { name: 'Microflex', dia1: 51448 },
        { name: 'Sixshot', dia1: 55913 },
        { name: 'Spidershot 180', dia1: 48491 },
    ]
    return (
        <section className="relative py-4 bg-cyanFondo">
            <div className="w-full mb-4 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded bg-verdeFondo2 border-2 border-negro">
                    <div className="rounded-t mb-0 px-4 py-4 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-bold text-3xl text-center">
                                    PROGRESO RUTINA EN AIM LAB
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparente overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="px-6 cabeceraHeadTable text-left">
                                        Rutina
                                    </th>
                                    <th className="px-3 cabeceraHeadTable">
                                        Día 1
                                    </th>
                                    {/* <th className="px-3 cabeceraHeadTable">
                                            Día 2
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 3
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 4
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 5
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 6
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 7
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 8
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 9
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 10
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 11
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 12
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 13
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 14
                                        </th>
                                        <th className="px-6 cabeceraHeadTable">
                                            Día 15
                                        </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((dato, i) => {
                                    return <Item dato={dato} key={i} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
