import './App.scss';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { SearchBlock } from './components/Header/SearchBlock';
import { ThreadTitle } from './components/Header/ThreadTitle';
import { SortBlock } from './components/Header/SortBlock';
import { Content } from './components/Content';
import { CardsList } from './components/CardsList';

function App() {

  return (
    <>
      <Layout>
        <Header>
          <SearchBlock />
          <ThreadTitle />
          <SortBlock />
        </Header>
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </>
  )
}

export default App
