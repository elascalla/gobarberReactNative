import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false /* Não mostrar o indicador de scroll */,
  contentContainerStyle: {
    padding: 30,
  } /* Estilo relacionado somente ao conteúdo da lista */,
})``;
