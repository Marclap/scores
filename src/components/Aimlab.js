import Item from './Item'

export default function Aimlab() {
    const data = [
        { name: 'Detection', dia1: 44839, dia2: 66939 },
        { name: 'Decisionshot', dia1: 52341, dia2: 59164 },
        { name: 'Pentakill', dia1: 92677, dia2: 108818 },
        { name: 'Spidershot', dia1: 63068, dia2: 60170 },
        { name: 'Microshot', dia1: 43928, dia2: 51418 },
        { name: 'Spidershot', dia1: 51568, dia2: 56618 },
        { name: 'Microshot', dia1: 54668, dia2: 55735 },
        { name: 'Strafetrack', dia1: 55340, dia2: 55860 },
        { name: 'Circletrack', dia1: 50810, dia2: 44660 },
        { name: 'Circleshot', dia1: 76979, dia2: 77978 },
        { name: 'Switchtrack', dia1: 61533, dia2: 70080 },
        { name: 'Strafeshot', dia1: 60817, dia2: 81967 },
        { name: 'Strafetrack', dia1: 52696, dia2: 47900 },
        { name: 'Spidershot', dia1: 56285, dia2: 52875 },
        { name: 'Microshot', dia1: 51016, dia2: 53940 },
        { name: 'Microflex', dia1: 51448, dia2: 52702 },
        { name: 'Sixshot', dia1: 55913, dia2: 62729 },
        { name: 'Spidershot 180', dia1: 48491, dia2: 49902 },
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
                                    <th className="px-3 cabeceraHeadTable">
                                        Día 2
                                    </th>
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
