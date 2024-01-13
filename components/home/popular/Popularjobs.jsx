import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import {COLORS, SIZE, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoading } from 'expo-font';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Zeige alles</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?(
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ) : error ? (
          <Text>Something Wrong here</Text>
        ) : (
          <FlatList
          data={[1,2,3,4,5 , 6 , 7, 8]}
          renderItem={({item})=> (

            <PopularJobCard
            item={item}
            />
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{columnGap: SIZES.medium}}
        horizontal
          /> 
        )}
      </View>


    </View>
  )
}

export default Popularjobs