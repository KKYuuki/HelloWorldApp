import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to the main app
      router.replace('/(tabs)');
    }, 500);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Image 
            source={require('@/assets/Logo/Spotify Logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Spotify</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#999"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            // Focus password input when next is pressed
            const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
            passwordInput?.focus();
          }}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </View>
        
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            (isLoading || !username || !password) && styles.buttonDisabled,
            pressed && styles.buttonPressed
          ]} 
          onPress={handleLogin}
          disabled={isLoading || !username || !password}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Text>
        </Pressable>

        <Text style={styles.connectwith}>
            Be Connect With
        </Text>
        
        <View style={styles.socialButtons}>
          <Pressable 
            style={[styles.socialButton, styles.facebookButton]}
            onPress={() => console.log('Facebook login pressed')}
          >
            <Image 
              source={require('@/assets/Logo/Facebook Logo.png')} 
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Pressable>
          
          <View style={styles.socialButtonSpacer} />
          
          <Pressable 
            style={[styles.socialButton, styles.googleButton]}
            onPress={() => console.log('Google login pressed')}
          >
            <Image 
              source={require('@/assets/Logo/Google Logo.png')} 
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <Text style={styles.hint}>
          Dont have an account? <Text style={styles.connectwith}>Sign up</Text>
        </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
    color: '#FFFFFF', // White color
  },
  input: {
    height: 50,
    width: '75%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#ffffff',
    alignSelf: 'center',
  },
  button: {
    height: 50,
    width: '75%',
    backgroundColor: '#1DB954', // Spotify green
    padding: 15,
    borderRadius: 25, // More rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  hint: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    opacity: 0.5,
    color: '#ffffff',
  },
  connectwith: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    opacity: 0.7,
    color: '#1DB954',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  facebookButton: {
    // Transparent background
  },
  googleButton: {
    // Transparent background
  },
  socialButtonSpacer: {
    width: 20,
  },
  socialIcon: {
    width: 32,
    height: 32,
    tintColor: '#ffffff',
  },
  passwordContainer: {
    width: '75%',
    position: 'relative',
    marginBottom: 20,
  },
  forgotPassword: {
    position: 'absolute',
    right: 10,
    bottom: -8,
    fontSize: 12,
    opacity: 0.5,
    color: '#ffffff',
  },
});
