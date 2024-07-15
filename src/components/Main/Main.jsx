import "../../App.css";
import Column from "../Column/Column";
import { Card } from "../Card/Card";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main({ cards, isLoading }) {
    return (
        <>
            <main className='main'>
                <div className='container'>
                    <div className='main__block'>
                        {isLoading ? (
                            <p>Данные загружаются</p>
                        ) : (
                            <div className='main__content'>
                                {statusList.map((status) => (
                                    <Column
                                        key={status}
                                        title={status}
                                        cards={cards.filter(
                                            (card) => card.status === status
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
