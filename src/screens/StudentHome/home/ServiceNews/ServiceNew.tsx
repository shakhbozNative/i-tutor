import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import ProductsTitle from '../../../../components/uiket/ProductsTitle';
import ServiceNewItemCart from '../components/ServiceNewItemCart';
import {ROUTES} from '../../../../constants/routes';
import {NewsType} from '../../../../store/home/news.type';

type Props = {
  title?: string;
  filter?: boolean;
  data: NewsType[];
};

export default function ServiceNew(props: Props) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.ServiceNewAll as never);
  };

  const renderItem: ListRenderItem<NewsType> = ({item: Item}) => (
    <ServiceNewItemCart
      title={Item.title}
      url={Item.photo}
      context={Item.content_mini}
      id={Item.id}
    />
  );

  return (
    <View style={{marginVertical: 20}}>
      <ProductsTitle title={props.title} showButton={true} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {paddingHorizontal: 10},
});
