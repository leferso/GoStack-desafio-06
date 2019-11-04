import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // se estiver emulando no USB, no .configure colocar o ip
  // const tron = Reactotron.configure({
  //   host: '192.168.0.100'
  // })
  //   .useReactNative()
  //   .connect();

  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
