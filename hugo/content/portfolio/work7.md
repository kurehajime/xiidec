+++
showonlyimage = false
draft = false
image = "img/command.png"
date = "2020-01-01T00:00:00+00:00"
title = "cmprss"
weight = 7
+++

テキストを非可逆圧縮するコマンド

<!--more-->

これが

```

$ cat ThinkDifferent.txt

Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes.
The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo.
You can quote them, disagree with them, glorify or vilify them.
About the only thing you can’t do is ignore them. Because they change things. They invent. They imagine.
They heal. They explore. They create. They inspire. They push the human race forward.
Maybe they have to be crazy.
How else can you stare at an empty canvas and see a work of art? Or sit in silence and
hear a song that’s never been written? Or gaze at a red planet and see a laboratory on wheels?
We make tools for these kinds of people.
While some see them as the crazy ones, we see genius. Because the people who are crazy enough
to think they can change the world, are the ones who do.

```

こうなる。

```

$ cmprss ThinkDifferent.txt

Hre’sToTheCrzyOns.TheMsfts.TheRbls.TheTroublmkrs.TheRoundPgsInTheSquareHls.
TheOnsWhoSeeThngsDffrntly.Thy’reNotFndOfRls.AndThyHveNoRspctForTheSttsQuo.
YouCanQuoteThm,DsgreeWthThm,GlrfyOrVlfyThm.
AboutTheOnlyThngYouCn’tDoIsIgnreThm.BcauseThyChngeThngs.ThyInvnt.ThyImgne.
ThyHeal.ThyExplre.ThyCreate.ThyInspre.ThyPshTheHmnRceFrwrd.
MybeThyHveToBeCrzy.
HowElseCanYouStreAtAnEmptyCnvsAndSeeAWrkOfArt?OrSitInSlnceAnd
HearASngTht’sNvrBeenWrttn?OrGzeAtARedPlntAndSeeALbrtryOnWheels?
WeMkeToolsForThseKndsOfPeople.
WhleSmeSeeThmAsTheCrzyOns,WeSeeGnius.BcauseThePeopleWhoAreCrzyEnough
ToThnkThyCanChngeTheWrld,AreTheOnsWhoDo.

```

実用性はない。

[解説記事](https://qiita.com/kurehajime/items/b3e03564e75d39c52113)

[Github](https://github.com/kurehajime/cmprss)