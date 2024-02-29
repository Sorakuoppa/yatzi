import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import Header from './Header';
import Footer from './Footer';
import styles from "../styles/style";
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS } from '../constants/Game';
import { Container, Row, Col } from "react-native-flex-grid";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons.js';

let board = [];

export default Gameboard = ({ navigation, route }) => {

    const [playerName, setPlayerName] = useState("");
    const [nbrOfThrows, setNbrOfThrows] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState("Throw dices");
    const [gameEndStatus, setGameEndStatus] = useState(false);
    /* Are dices selected or not? */
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    /* Dice spots (1, 2, 3, 4, 5, 6) for each die */
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    /* Are dice points selected or not */
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));

    const [dicePointsTotal, setdicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));

    useEffect(() => {
        if (playerName === "" && route.params?.player) {
            setPlayerName(route.params.player);
        }
    }, []);

    const dicesRow = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++) {
        dicesRow.push(
            <Col key={"dice" + dice}>
                <Pressable key={"dice" + dice} onPress={() => selectedDice(dice)}>
                    <MaterialCommunityIcons
                        name={board[dice]}
                        key={"dice" + dice}
                        size={50}
                        color={getDiceColor(dice)}>
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }
/* call the function for calculating poitns inside text */
    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++) {
        pointsRow.push(
            <Col key={"pointsRow" + spot}>
                <Text key={"pointsRow" + spot}>
                    0
                </Text>
            </Col>
        );
    }

    const pointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
        pointsToSelectRow.push(
            <Col key={"buttonsRow" + diceButton}>
                <Pressable key={"buttonsRow" + diceButton} /* onPress={() => selected()} */>
                    <MaterialCommunityIcons
                        name={"numeric-" + (diceButton + 1) + "-circle"}
                        key={"buttonsRow" + diceButton}
                        size={35}
                        color={"green"}>
                        {/* Pressable here for getting the color */}
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }

    function getDiceColor(i) {
        return selectedDices[i] ? "black" : "steelblue";
    }

    const selectedDice = (i) => {
        if (nbrOfThrows < NBR_OF_THROWS && !gameEndStatus) {
            let dices = [...selectedDices];
            dices[i] = selectedDices[i] ? false : true;
            setSelectedDices(dices);
        }
        else {
            setStatus("You have to throw dices first.")
        }

    }

    const throwDices = () => {
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = "dice-" + randomNumber;
            }
        }
        setNbrOfThrows(nbrOfThrows - 1);
    }

    return (
        <>
            <Header />
            <View style={styles.gameboard}>
                <Text>Throws left: {nbrOfThrows}</Text>
                <Container fluid>
                    <Row>{dicesRow}</Row>
                </Container>
                <Pressable onPress={throwDices} style={styles.button}>
                    <Text>THROW DICES</Text>
                </Pressable>
                <Container fluid>
                    <Row>{pointsRow}</Row>
                </Container>
                <Container fluid>
                    <Row>{pointsToSelectRow}</Row>
                </Container>
                <Text>Player: {playerName}</Text>
            </View>
            <Footer />
        </>
    )
}