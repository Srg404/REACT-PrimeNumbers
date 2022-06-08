import './index.scss';
import { useTranslation } from 'react-i18next';

function HowToPlay() {
  const { t } = useTranslation();
  return (
    <div className="how-to-play">
      <div className="container">
        <h1>{t('How to play')}</h1>
        <p>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Sed ne, dum huic obsequor, vobis molestus sim. Nunc omni virtuti vitium contrario nomine opponitur. An hoc usque quaque, aliter in vita? </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Philosophi autem in suis lectulis plerumque moriuntur. Aliud igitur esse censet gaudere, aliud non dolere. Re mihi non aeque satisfacit, et quidem locis pluribus. Duo Reges: constructio interrete. Quod ea non occurrentia fingunt, vincunt Aristonem; Quamquam tu hanc copiosiorem etiam soles dicere. </p>
        <p>Non semper, inquam; Primum in nostrane potestate est, quid meminerimus? Si id dicis, vicimus. Sed videbimus. </p>
        <p>Praeclare hoc quidem. Sed plane dicit quod intellegit. Certe, nisi voluptatem tanti aestimaretis. Tu quidem reddes; Nos commodius agimus. Sed quid sentiat, non videtis. At hoc in eo M. </p>
        <p>Sed quot homines, tot sententiae; Sequitur disserendi ratio cognitioque naturae; Restinguet citius, si ardentem acceperit. Videsne quam sit magna dissensio? </p>
      </div>
    </div>
  );
}

export default HowToPlay;