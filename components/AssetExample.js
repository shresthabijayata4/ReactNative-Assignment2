import React from 'react';
import { Text, View, Image, StyleSheet, Platform, ScrollView } from 'react-native';

const AssetExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/me_pic.jpeg')} style={styles.image} />
        <Text style={styles.text}>
          WELCOME TO THE UNIVERSITY of the CUMBERLANDS{"\n"}
          Course ID: MSCS 533{"\n"}
         
          {`
Hello, my name is Bijayata Shrestha.
 I am currently a graduate student at the University of the Cumberlands, pursuing a Master’s 
 degree in Computer Science.
  I have a background in frontend development and a strong 
  interest in full stack development.



Thank you for visiting my BioSketch!
`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e60026',
  
  },
  container: {
    flex: 2,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: 16,
  },
  text: {
    color: Platform.OS === 'ios' ? '#000' : '#fff',
    textAlign: 'center',
    fontWeight: Platform.OS === 'ios' ? '600' : '400',
    width: '100%', 
    flexWrap: 'wrap',
    lineHeight: 22, 
  },
});

export default AssetExample;
