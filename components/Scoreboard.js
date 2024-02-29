import { Text, View } from "react-native";
import Header from './Header';
import Footer from './Footer';
import styles from "../styles/style";

export default Scoreboard = () => {
    return (
        <>
        <View style={styles.container}>
            <Header/>
            <View style={styles.gameboard}>
            <Text style={styles.gameinfo}>
                Scoreboard should be here.
            </Text>
            </View>
            <Footer/>
        </View>
        </>
    )
}