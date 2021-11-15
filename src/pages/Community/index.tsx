import logo from './../../assets/image/logo.png';
import diceQuestion from './../../assets/image/perspective-dice-six-faces-random.png';
import { useQuestions } from '../../providers/Questions';
import { useUser } from '../../providers/User';
import { useHistory } from 'react-router-dom';
import {
    GlobalSection,
    Header,
    HeaderSection,
    Image,
    LogoHeader,
    MakeQuestButtonCenter,
    MakeQuestButtonTop,
    MyQuestionsTab,
    MyQuestTitle,
    QuestHeader,
    QuestionsTab,
    QuestionsTitle,
    TitleBlock,
} from './style';
import { MdAddCircle } from 'react-icons/md';
import { InputCommunity } from '../../components/InputCommunity';
import QuestCard from '../../components/QuestCard';
import MyQuestCard from '../../components/MyQuestCard';
import LikeButton from '../../components/LikeButton';

const Community = () => {
    const { auth } = useUser();
    const { allQuestions, userQuests } = useQuestions();
    const history = useHistory();

    console.log(allQuestions);

    if (!auth) {
        history.push('/login');
    }

    return (
        <main>
            <Header>
                <LogoHeader>
                    <img src={logo} alt="Tasko" />
                </LogoHeader>
            </Header>
            <section>
                <InputCommunity />
            </section>
            <GlobalSection>
                <section>
                    <QuestHeader>
                        <TitleBlock>
                            <QuestionsTitle>Perguntas</QuestionsTitle>{' '}
                            <Image src={diceQuestion} alt="Perguntas" />
                        </TitleBlock>
                        <MakeQuestButtonTop onClick={() => 0}>
                            <MdAddCircle />
                            <span>Perguntar</span>
                        </MakeQuestButtonTop>
                    </QuestHeader>
                    <QuestionsTab>
                        {allQuestions.map(
                            ({ body, id, likes, userId }, index) => (
                                <QuestCard
                                    key={index}
                                    id={id}
                                    userId={userId}
                                    body={body}
                                    likes={likes}
                                />
                            ),
                        )}
                    </QuestionsTab>
                </section>
                <section>
                    <HeaderSection>
                        <MyQuestTitle>Minhas perguntas</MyQuestTitle>
                        <MakeQuestButtonCenter onClick={() => 0}>
                            Perguntar
                        </MakeQuestButtonCenter>
                    </HeaderSection>
                    <MyQuestionsTab>
                        {userQuests.map(({ body, likes }, index) => (
                            <MyQuestCard
                                key={index}
                                body={body}
                                likes={likes}
                            />
                        ))}
                    </MyQuestionsTab>
                </section>
            </GlobalSection>
        </main>
    );
};

export default Community;
