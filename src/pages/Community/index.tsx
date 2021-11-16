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
import { useState } from 'react';
import AddQuestModal from '../../components/AddQuestModal';
import EditQuestModal from '../../components/EditQuestModal';
import { EditQuestion } from '../../types/questions';

const Community = () => {
    const [editQuestion, setEditQuestion] = useState<EditQuestion>(
        {} as EditQuestion,
    );
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { auth } = useUser();
    const { allQuestions, userQuests } = useQuestions();
    const history = useHistory();

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
                    {openModal && (
                        <AddQuestModal setShowAddModal={setOpenModal} />
                    )}
                    <QuestHeader>
                        <TitleBlock>
                            <QuestionsTitle>Perguntas</QuestionsTitle>{' '}
                            <Image src={diceQuestion} alt="Perguntas" />
                        </TitleBlock>
                        <MakeQuestButtonTop
                            onClick={() => setOpenModal(!openModal)}
                        >
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
                        <MakeQuestButtonCenter
                            onClick={() => setOpenModal(!openModal)}
                        >
                            Perguntar
                        </MakeQuestButtonCenter>
                    </HeaderSection>
                    {editQuestion.isOpen && (
                        <EditQuestModal
                            editUserQuestion={editQuestion}
                            setShowEditModal={setEditQuestion}
                        />
                    )}
                    <MyQuestionsTab>
                        {userQuests.map(({ body, id, likes }, index) => (
                            <MyQuestCard
                                key={index}
                                id={id}
                                body={body}
                                likes={likes}
                                editQuestion={editQuestion}
                                setShowEditModal={setEditQuestion}
                            />
                        ))}
                    </MyQuestionsTab>
                </section>
            </GlobalSection>
        </main>
    );
};

export default Community;
