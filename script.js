const questions = [
  {
    question: "AIは何の略でしょう？",
    choices: [
      "Artificial Intelligence（アーティフィシャル・インテリジェンス）",
      "Automatic Intelligence（オートマティック・インテリジェンス）",
      "Advanced Information（アドバンスト・インフォメーション）",
      "Artificial Information（アーティフィシャル・インフォメーション）"
    ],
    answer: 0,
    explanation:
      "AIは Artificial Intelligence（アーティフィシャル・インテリジェンス）の略で、日本語では「人工知能」といいます。"
  },

  {
    question: "「強いAI」と「弱いAI」の説明として、正しいものはどれでしょう？",
    choices: [
      "強いAIは人間と同じか、それ以上のことができ、弱いAIは特定の目的に限って働く",
      "強いAIは小さなAIで、弱いAIは大きなAIである",
      "強いAIはインターネットにつながり、弱いAIはつながらない",
      "強いAIは必ずロボットで、弱いAIは必ずコンピューターである"
    ],
    answer: 0,
    explanation:
      "強いAIは、人間と同じかそれ以上の幅広い能力を持つAIを指します。一方、弱いAIは特定の目的や仕事に特化したAIです。現在使われているAIは、弱いAIに分類されます。"
  },

  {
    question: "AIは、どのようなものからできているでしょう？",
    choices: [
      "たくさんのプログラムが組み合わさったもの",
      "1つの巨大なプログラムだけで動くもの",
      "人間の脳をそのままコピーしたもの",
      "インターネット上の情報を集めただけのもの"
    ],
    answer: 0,
    explanation:
      "AIは、さまざまなプログラムや仕組みを組み合わせて作られています。シンプルなプログラムが組み合わさることで、複雑な処理を行える仕組みになります。"
  },

  {
    question: "AIは、何のために使われることが多いでしょう？",
    choices: [
      "人間には難しい作業を手助けするため",
      "人間の仕事をすべてなくすため",
      "人間の代わりにすべての判断をするため",
      "コンピューターを人間のように見せるため"
    ],
    answer: 0,
    explanation:
      "AIは、人間の作業や判断を手助けするために使われています。人間が扱うには多すぎるデータや複雑な情報を分析したり、人間より速く処理したりできることがあります。"
  },

  {
    question: "インターネットにつながり、さまざまな機器と情報をやり取りできる家電を何と呼ぶでしょう？",
    choices: [
      "IoT家電",
      "AI専用家電",
      "デジタル家電",
      "自動制御家電"
    ],
    answer: 0,
    explanation:
      "IoTは Internet of Things（インターネット・オブ・シングス）の略で、「モノのインターネット」という意味です。家電などの「モノ」がインターネットにつながることで、情報をやり取りできるようになります。"
  },

  {
    question: "チューリングテストは、何を確かめるためのテストでしょう？",
    choices: [
      "AIが人間と区別できないほど自然に会話できるか",
      "AIが初めて訪れた家でコーヒーを入れられるか",
      "AIが大量のデータを正確に分析できるか",
      "AIが自分で新しいプログラムを作れるか"
    ],
    answer: 0,
    explanation:
      "チューリングテストは、AIと人間が会話したときに、人間が相手をAIだと区別できないほど自然に会話できるかを確かめる考え方です。"
  },

  {
    question: "ウォズニアックテストでは、AIが何をできたら合格とされるでしょう？",
    choices: [
      "初めて訪れた家で、住人のためにコーヒーを入れる",
      "初めて会った人と、自然な会話を続ける",
      "大量のデータから、正しい答えを見つける",
      "自分で新しいコンピューターを組み立てる"
    ],
    answer: 0,
    explanation:
      "ウォズニアックテストは、AIが初めて訪れた家で、そこにあるものを使ってコーヒーを入れられるかという、現実の環境で柔軟に行動できる能力を試す考え方です。"
  },

  {
    question: "チューリングテストとウォズニアックテストの違いとして、正しいものはどれでしょう？",
    choices: [
      "チューリングテストは会話、ウォズニアックテストは現実の環境での行動を試す",
      "チューリングテストは計算能力、ウォズニアックテストは記憶力を試す",
      "チューリングテストは画像認識、ウォズニアックテストは音声認識を試す",
      "チューリングテストはロボット専用、ウォズニアックテストはスマホ専用である"
    ],
    answer: 0,
    explanation:
      "チューリングテストは、AIが人間と区別できないほど自然に会話できるかを確かめるものです。一方、ウォズニアックテストは、初めて訪れた家でコーヒーを入れるというように、現実の環境で状況に合わせて行動できるかを見る考え方です。"
  },

  {
    question: "機械学習における「教師あり学習」とは、どのような学習方法でしょう？",
    choices: [
      "正解となるデータを与えて、そこからパターンを学習する",
      "AI自身が正解を決めて、自由に学習する",
      "人間がAIの答えを毎回入力して、直接操作する",
      "インターネット上の情報を何でも自動的に覚える"
    ],
    answer: 0,
    explanation:
      "教師あり学習では、正解が付いたデータをAIに与えて学習させます。例えば、画像に「猫」「犬」という正解を付けて学習させることで、新しい画像を分類できるようになります。"
  },

  {
    question: "機械学習における「教師なし学習」とは、どのような学習方法でしょう？",
    choices: [
      "正解が付いていないデータから、AIが特徴やパターンを見つける",
      "正解が付いたデータを使って、AIに答えを覚えさせる",
      "人間が一つひとつ答えを教えながら、AIを操作する",
      "AIがインターネット上の情報をすべて記憶する"
    ],
    answer: 0,
    explanation:
      "教師なし学習では、あらかじめ正解を付けていないデータから、データの中にある特徴やパターンをAI自身に見つけさせます。"
  }
];

let currentQuestion = 0;
let score = 0;

const progress = document.getElementById("progress");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const nextButton = document.getElementById("nextButton");
const quiz = document.getElementById("quiz");
const scoreScreen = document.getElementById("scoreScreen");
const scoreText = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

function showQuestion() {
  const q = questions[currentQuestion];

  progress.textContent =
    `${currentQuestion + 1} / ${questions.length}`;

  question.textContent = q.question;

  choices.innerHTML = "";
  result.innerHTML = "";
  nextButton.classList.add("hidden");

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${choice}`;

    button.className = "choice";

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    choices.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (selectedIndex === q.answer) {
    score++;
    buttons[selectedIndex].classList.add("correct");

    result.innerHTML =
      `<strong>正解！</strong><br>${q.explanation}`;
  } else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[q.answer].classList.add("correct");

    result.innerHTML =
      `<strong>不正解！</strong><br>` +
      `正解は「${String.fromCharCode(65 + q.answer)}」です。<br>` +
      `${q.explanation}`;
  }

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quiz.classList.add("hidden");
  scoreScreen.classList.remove("hidden");

  const percentage =
    Math.round((score / questions.length) * 100);

  scoreText.textContent =
    `${questions.length}問中 ${score}問正解！ ${percentage}点`;
}

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;

  quiz.classList.remove("hidden");
  scoreScreen.classList.add("hidden");

  showQuestion();
});

showQuestion();
