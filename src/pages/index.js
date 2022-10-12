import Head from 'next/head'
import Aimlab from '../components/Aimlab'
import Bots from '../components/Bots'
import Deathmatch from '../components/Deathmacth'

const Home = () => {
    return (
        <>
            <Head>
                <title>Scores</title>
            </Head>
            <Aimlab />
            <Deathmatch />
            <Bots />
        </>
    )
}

export default Home
