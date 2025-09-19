import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  
  // Static opacity for connect text
  const connectTextOpacity = 0.8;

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
        <View style={styles.inputContainer}>
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
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
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
          <LinearGradient
            colors={['#0d5c2d', '#1fd65e']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.connectContainer}>
          <Animated.Text 
            style={[
              styles.connectwith,
              {
                opacity: connectTextOpacity,
              }
            ]}
          >
            Be Connect With
          </Animated.Text>
        </View>
        
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

        <View style={styles.hintContainer}>
          <Text style={styles.hint}>Dont have an account? </Text>
          <Pressable>
            <Text style={styles.signupText}>
              Sign up
            </Text>
          </Pressable>
        </View>
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
  inputContainer: {
    width: '80%',
    marginBottom: 24,
    position: 'relative',
    borderRadius: 16,
    backgroundColor: '#1a1a1a',
    // Neumorphism effect - pushed in appearance
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    // Outer shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    // Inner shadow for pushed-in effect
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderRightColor: 'rgba(255, 255, 255, 0.05)',
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  input: {
    height: 55,
    width: '100%',
    borderWidth: 0,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingRight: 100, // Make room for forgot password
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#1a1a1a',
    // Inner glow effect
    textShadowColor: 'rgba(255, 255, 255, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    // Subtle gradient overlay for depth
    backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.02), rgba(0,0,0,0.1))',
  },
  button: {
    width: '80%',
    height: 55,
    borderRadius: 27.5,
    overflow: 'hidden',
    marginTop: 40,
    shadowColor: '#0a0a0a',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'transparent',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonDisabled: {
    opacity: 0.6,
    shadowOpacity: 0.3,
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  hint: {
    fontSize: 12,
    color: '#999999',
    opacity: 0.8,
  },
  signupText: {
    color: '#1DB954',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: 'rgba(29, 185, 84, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  connectContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  connectwith: {
    fontSize: 16,
    color: '#1DB954',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 27.5,
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
  forgotPassword: {
    position: 'absolute',
    right: 15,
    top: '50%',
    marginTop: 35, // Half of font size to center vertically
    fontSize: 12,
    color: '#1DB954',
    fontWeight: '600',
  },
});
