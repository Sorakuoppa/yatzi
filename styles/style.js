import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#50a950',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#50a950',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  rulestext: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    margin: 10
  },
  gametext: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  scoreNumber: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 20,
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#50a950",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#ffffff",
    fontSize: 15
  },
  textInput: {
    width: "60%",
    borderWidth: 2,
    borderColor: "#000000",
    textAlign: 'center'
  }
});