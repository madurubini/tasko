import {
    AskIcon,
    AskSection,
    Header,
    HeaderSection,
    Image,
    MakeQuestButton,
    MyQuestionsTab,
    Mytest,
    QuestContent,
    QuestionsTab,
    QuestionsTitle,
    Test,
    TitleBlock,
} from './style';
import logo from './../../assets/image/logo.png';
import diceQuestion from './../../assets/image/perspective-dice-six-faces-random.png';
import { useQuestions } from '../../providers/Questions';
import { useUser } from '../../providers/User';
import { useHistory } from 'react-router-dom';

const Community = () => {
    const { auth } = useUser();
    const { allQuestions, userQuests } = useQuestions();
    const history = useHistory();

    if (!auth) {
        history.push('/login');
    }

    return (
        <main>
            <Header>
                <picture>
                    <Image src={logo} alt="Tasko" />
                </picture>
            </Header>
            <AskSection>
                <div></div>
            </AskSection>
            <section>
                <TitleBlock>
                    <QuestionsTitle>Perguntas</QuestionsTitle>{' '}
                    <AskIcon src={diceQuestion} alt="Perguntas" />
                    <HeaderSection>
                        <h2>Minhas perguntas</h2>
                        <MakeQuestButton onClick={() => 0}>
                            Perguntar
                        </MakeQuestButton>
                    </HeaderSection>
                </TitleBlock>
                <QuestContent>
                    <QuestionsTab>
                        {allQuestions.map(({ body, likes }, index) => (
                            <Test key={index}>
                                <span>{body}</span>
                                <span>{likes}</span>
                            </Test>
                        ))}
                    </QuestionsTab>
                    <section>
                        <MyQuestionsTab>
                            {userQuests.map(({ body, likes }, index) => (
                                <Mytest key={index}>
                                    <span>{body}</span>
                                    <span>{likes}</span>
                                </Mytest>
                            ))}
                        </MyQuestionsTab>
                    </section>
                </QuestContent>
            </section>
        </main>
    );
};

export default Community;
