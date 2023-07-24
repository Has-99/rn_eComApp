import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';
import FormHeader from './app/components/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn';
import SigninForm from './app/components/SigninForm';
import SignupForm from './app/components/SignupForm';
import axios from 'axios';


const {width} = Dimensions.get('window');

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();


  const fetchApi = async () => {
    try {
      const res = await axios.get('http://10.21.129.213:8000/');
      console.log(res.data);

    } catch (error) {
      console.log(error.message);
    } 
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0] ,
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40] ,
  });

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20] ,
  });

  const signinColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(0,0,139,1)', 'rgba(0,0,139,0.4)'] ,
  });

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(0,0,139,0.4)', 'rgba(0,0,139,1)'] ,
  });

  
  
  return ( 
  <View style = {{flex: 1, paddingTop: 120}}>
    <View style = {{ height: 100 }}>
      <FormHeader 
        leftHeading= 'Welcome' 
        rightHeading= ' Back' 
        subHeading='E-CommApp'
        rightHeaderOpacity={rightHeaderOpacity} 
        leftHeaderTranslateX={leftHeaderTranslateX}
        rightHeaderTranslateY={rightHeaderTranslateY}
      />
    </View>

    <View 
      style= {{
        flexDirection: 'row' , 
        paddingHorizontal:20 , 
        marginBottom: 20
        }}
    >
      <FormSelectorBtn
        style={styles.borderLeft} 
        backgroundColor={signinColorInterpolate} 
        title= 'SignIn'
        onPress={() => scrollView.current.scrollTo({ x: 0})}
      />

      <FormSelectorBtn 
        style={styles.borderRight} 
        backgroundColor={signupColorInterpolate} 
        title= 'SignUp'
        onPress={() => scrollView.current.scrollTo({ x: width})}
      />

    </View>

    <ScrollView 
      ref={scrollView}
      horizontal 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: animation} } } ,], {useNativeDriver: false}
        )}>
        <SigninForm/>
        <ScrollView>
          <SignupForm/>
        </ScrollView>
        
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius:8
  },

  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius:8
  }

});
