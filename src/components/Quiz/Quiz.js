import './Quiz.css';
import React, { useEffect, useRef, useState } from "react";


const Quiz = () => {
    const questions = [
		{
			questionText: '678 + 56',
			answerOptions: [
				{ answerText: '760', isCorrect: false },
				{ answerText: '801', isCorrect: false },
				{ answerText: '734', isCorrect: true },
				{ answerText: '699', isCorrect: false },
			],
		},
		{
			questionText: '10 + 5',
			answerOptions: [
				{ answerText: '16', isCorrect: false },
				{ answerText: '15', isCorrect: true },
				{ answerText: '17', isCorrect: false },
				{ answerText: '18', isCorrect: false },
			],
		},
		{
			questionText: '99 + 3',
			answerOptions: [
				{ answerText: '102', isCorrect: true },
				{ answerText: '111', isCorrect: false },
				{ answerText: '90', isCorrect: false },
				{ answerText: '101', isCorrect: false },
			],
		},
		{
			questionText: '101 + 98',
			answerOptions: [
				{ answerText: '180', isCorrect: false },
				{ answerText: '190', isCorrect: false },
				{ answerText: '180', isCorrect: false },
				{ answerText: '199', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		  

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const audioRef = useRef(null);

	useEffect(() => {
	  audioRef.current.play();
	}, []);
	return (
		<div className= 'container'>
			<div className='title2'>
			<h1> Att tänka snabbt ger snabba resultat - träningen har börjat nu</h1>
			</div>
			
		<div className='app'>
		<audio ref={audioRef} src={'/Audio/Sound2.mp3'} />
			{showScore ? (
				<div className='score-section'>
					Du fick rätt på {score} utav av {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='boxOut'>
						<div className='boxIn'>{questions[currentQuestion].questionText}</div>
						</div>
						
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
export default Quiz;
