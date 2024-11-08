import React, { useState } from "react";
import './Acordeon.css';

const Acordeon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="glossario">
            <div className="titulo-glossario">
                    <h1>Glossário</h1> 
                    <img src="./src/components/Introducao/acordeon/seta-abaixo.png" onClick={toggleContent} id="btn-glossario" />
                </div>
            <div className={`conteudo-glossario ${isOpen ? '' : 'esconder'}`}>
                <ul>
                    <div className="banner-glossario">

                    </div>
                    <li><span>Ação</span>: Algo que um personagem faz durante seu turno, como atacar, lançar uma magia, ou usar um item. Normalmente, os personagens têm uma ação principal por turno.</li>
                    <li><span>Atributos</span>: As seis características principais que definem um personagem: Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma. Eles influenciam as habilidades e as ações de um personagem.</li>
                    <li><span>Armadura</span>: Equipamento que oferece proteção ao personagem, aumentando sua Classe de Armadura (CA), dificultando que os inimigos o acertem em combate.</li>
                    <li><span>Bônus de Ataque</span>: O número que é somado ao resultado da rolagem de ataque para determinar se o ataque acerta ou não o alvo.</li>
                    <li><span>Bônus de Proficiência:</span> Um bônus que os personagens recebem em rolagens de ataque, testes de perícia e testes de resistência, baseado em seu nível e especialização.</li>
                    <li><span>Classe</span>: Representa a profissão ou papel de um personagem no jogo, como Guerreiro, Mago, Ladrão ou Clérigo. Cada classe tem habilidades e poderes únicos.</li>
                    <li><span>Classe de Armadura</span> (CA): Um número que representa o quão difícil é acertar um personagem em combate. Quanto maior, mais difícil é causar dano ao personagem.</li>
                    <li><span>Combate</span>: Sistema de luta em turnos no qual os personagens enfrentam inimigos. Usam-se dados para determinar acertos e dano.</li>
                    <li><span>Constituição</span>: Um dos atributos, que representa a saúde física e resistência de um personagem. Afeta os pontos de vida e a resistência física.</li>
                    <li><span>Dado</span>: D&D usa dados policromáticos, como o d20 (20 lados), d12, d10, d8, d6 e d4, para resolver ações no jogo. O dado de 20 lados (d20) é o mais comum para rolar testes de habilidade e ataques.</li>
                    <li><span>Dano</span>: A quantidade de prejuízo físico ou mágico causado a um personagem ou criatura, subtraído dos pontos de vida.</li>
                    <li><span>Dungeon Master (DM):</span> O narrador e árbitro do jogo, responsável por descrever o mundo, controlar monstros e NPCs, e guiar a história. Também conhecido como Mestre de Jogo.</li>
                    <li><span>Encantamento</span>: Uma escola de magia que envolve feitiços que influenciam a mente e as emoções das criaturas.</li>
                    <li><span>Escola de Magia:</span> Diferentes tipos de magia que magos e outros conjuradores podem utilizar, como Evocação (dano direto), Necromancia (manipulação de vida e morte), ou Transmutação (transformação de matéria).</li>
                    <li><span>Espaço de Magia:</span> Refere-se ao número limitado de feitiços que um conjurador pode lançar antes de precisar descansar ou recuperar seu poder mágico.</li>
                    <li><span>Feitiço</span>: Uma habilidade mágica que conjuradores como Magos, Feiticeiros e Clérigos podem usar para causar dano, curar, ou afetar o ambiente ou criaturas de várias maneiras.</li>
                    <li><span>Ficha de Personagem:</span> O documento que contém todas as informações sobre o personagem, incluindo seus atributos, classe, raça, habilidades e histórico.</li>
                    <li><span>Habilidade:</span> Capacidades especiais de um personagem, como as perícias ou magias. Podem ser habilidades raciais, de classe ou adquiridas através de talentos.</li>
                    <li><span>HP (Pontos de Vida):</span> A quantidade de dano que um personagem pode sofrer antes de ser incapacitado ou morrer.</li>
                    <li><span>Iniciativa</span>: Um valor que determina a ordem dos turnos durante o combate. Os personagens rolam um d20 no início do combate, adicionando seu modificador de Destreza.</li>
                    <li><span>Magia</span>: Poderes sobrenaturais que alguns personagens podem usar para lançar feitiços, invocar criaturas ou manipular o ambiente.</li>
                    <li><span>Modificador</span>: Um bônus ou penalidade aplicado às rolagens de dados, baseado nos atributos do personagem (por exemplo, um personagem com alta Força tem um modificador positivo em jogadas de ataque corpo a corpo).</li>
                    <li><span>Monstros</span>: Criaturas controladas pelo DM que servem como adversários ou aliados dos personagens jogadores. Podem variar de criaturas simples a ameaças lendárias.</li>
                    <img className="imagem-glossario" src="https://i.pinimg.com/564x/91/13/9f/91139f286c9d190d596186b43de420b0.jpg" alt="Imagem de uma biblioteca majestosa" />
                    <li><span>NPC</span> (Personagem Não-Jogador): Personagens controlados pelo DM, que interagem com os jogadores, oferecendo informações, desafios ou ajuda.</li>
                    <li><span>Perícia</span>: Habilidades específicas, como Atletismo, Furtividade, ou Persuasão, que os personagens podem usar para realizar ações no jogo. Perícias são influenciadas pelos atributos do personagem.</li>
                    <li><span>Pontos de Experiência (XP):</span> A quantidade de experiência que um personagem ganha ao derrotar inimigos ou completar missões. XP permite que o personagem suba de nível e fique mais poderoso.</li>
                    <li><span>Raça</span>: A espécie do personagem, como humano, elfo, anão, ou meio-orc. Cada raça tem suas próprias habilidades e características únicas.</li>
                    <li><span>Rolagem de Salvamento:</span> Um teste feito para resistir a efeitos como magia, veneno, ou armadilhas. Os personagens usam seus modificadores de atributos para ajudar na rolagem.</li>
                    <li><span>Sobrenatural</span>: Refere-se a efeitos, criaturas ou habilidades que não seguem as leis normais da natureza, como magia, monstros lendários e objetos mágicos.</li>
                    <li><span>Surto de Ação:</span> Habilidade exclusiva de algumas classes, como o Guerreiro, que permite ao personagem realizar uma ação extra em um turno.</li>
                    <li><span>Teste de Habilidade:</span> Um teste que um jogador realiza quando tenta fazer algo arriscado ou difícil, como desarmar uma armadilha ou convencer alguém. Ele rola um d20 e soma o modificador de atributo relevante para ver se teve sucesso.</li>
                    <li><span>Vantagem</span>: Um conceito no jogo onde um personagem rola dois dados d20 e fica com o maior resultado. Isso pode acontecer em circunstâncias favoráveis, como em emboscadas ou ataques surpresa.</li>
                    
                    <li><span>Vida</span> (Pontos de Vida): A quantidade de dano que um personagem pode sofrer antes de ser incapacitado ou morrer.</li>
                    <li><span>Zona de Efeito:</span> O espaço ou área que é afetada por uma magia ou habilidade. Magias de explosão ou área, por exemplo, afetam todos os alvos dentro de uma zona específica.</li>
                </ul>
              
                </div>
            </div>
        </>
    );
};

export default Acordeon;
