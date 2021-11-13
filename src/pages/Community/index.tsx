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
    MakeQuestButtonTop,
    MyQuestCard,
    MyQuestionsTab,
    MyQuestTitle,
    QuestCard,
    QuestHeader,
    QuestionsTab,
    QuestionsTitle,
    TitleBlock,
} from './style';
import { MdAddCircle } from 'react-icons/md';
import { InputCommunity } from '../../components/InputCommunity';

const Community = () => {
    const { auth } = useUser();
    const { allQuestions, userQuests } = useQuestions();
    const history = useHistory();
    const { log } = console;

    if (!auth) {
        history.push('/login');
    }

    log(userQuests);

    return (
        <main>
            <Header>
                <picture>
                    <img src={logo} alt="Tasko" />
                </picture>
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
                        {allQuestions.map(({ body, likes }, index) => (
                            <QuestCard key={index}>
                                <span>{body}</span>
                                <span>{likes}</span>
                            </QuestCard>
                        ))}
                    </QuestionsTab>
                </section>
                <section>
                    <HeaderSection>
                        <MyQuestTitle>Minhas perguntas</MyQuestTitle>
                    </HeaderSection>
                    <MyQuestionsTab>
                        {userQuests.map(({ body, likes }, index) => (
                            <MyQuestCard key={index}>
                                <span>{body}</span>
                                <span>{likes}</span>
                            </MyQuestCard>
                        ))}
                    </MyQuestionsTab>
                </section>
            </GlobalSection>
        </main>
    );
};

export default Community;
