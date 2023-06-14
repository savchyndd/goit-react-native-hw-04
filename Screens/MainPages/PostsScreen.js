import { Image } from 'react-native';
import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatarImg} />
        <Text style={styles.avatarName}>Natali Romanova</Text>
        <Text style={styles.avatarEmail}>email@example.com</Text>
      </View>
      <Text>Posts list</Text>
      <View style={styles.navTabs}></View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingVertical: 32,

    backgroundColor: '#fff',

    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
