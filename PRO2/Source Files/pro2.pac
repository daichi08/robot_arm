'!TITLE "<タイトル>"
PROGRAM PRO2
	TAKEARM
	SPEED 30
	'碁盤中心兼鉛筆立て中心
	MOVE P, (0,500,250,180,0,0,-1)
	'鉛筆立て高さ50[mm]
	'ハンド高さ137[mm]
		' -> Z195で掴む = Z195で接地する
	'鉛筆と衝突すると嫌だから念のため下がる前に開く
'<--- unsupported line --->		RESET IO[64]	'閉OFF
'<--- unsupported line --->		SET IO[65]		'開ON
	DELAY 1500		'待機

	'鉛筆掴む
	DEPART L, -55
'<--- unsupported line --->		RESET IO[65]	'開OFF
'<--- unsupported line --->		SET IO[64]		'閉ON
	DELAY 1500		'待機
'<--- unsupported line --->		RESET IO[64]	'閉OFF
	DEPART L, 55

	'10~6,5~1[mm]の順で動く
	'以下全てX=90,45,0,-45,90 +- 2.5
		'以下Y=550 or 552.5 or 547.5
		'10[mm]
			'X軸
			MOVE		P, (92.5,550,250,180,0,0,-1)
			DEPART		L, -55
			MOVE		P, (87.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (90,552.5,200,180,0,90,-1)	
			DEPART		L, -5
			MOVE		P, (90,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'9[mm]
			'X軸
			MOVE		P, (47.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (42.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (45,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (45,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'8[mm]
			'X軸
			MOVE		P, (2.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P,	(-2.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (0,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (0,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'7[mm]
			'X軸
			MOVE		P, (-42.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-47.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (-45,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-45,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'6[mm]
			'X軸
			MOVE		P, (-87.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-92.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (-90,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-90,547.5,195,180,0,90,-1)
			'鉛筆立てとぶつからないように
			DEPART		L, 55

		'高さ調節
			MOVE P, (0,500,250,180,0,0,-1)
			DEPART L, -55
'<--- unsupported line --->				RESET IO[64]	'閉OFF
'<--- unsupported line --->				SET IO[65]		'開ON
			DELAY 1500		'待機
'<--- unsupported line --->				RESET IO[65]	'開OFF
'<--- unsupported line --->				SET IO[64]		'閉ON
			DELAY 1500		'待機
'<--- unsupported line --->				RESET IO[64]	'閉OFF
			DEPART L, 55


		'以下Y=450 or 452.5 or 447.5
		'5[mm]
			'X軸
			MOVE		P, (92.5,450,250,180,0,0,-1)
			DEPART		L, -55
			MOVE		P, (87.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (90,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (90,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'4[mm]
			'X軸
			MOVE		P, (47.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (42.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (45,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (45,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'3[mm]
			'X軸
			MOVE		P, (2.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-2.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (0,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (0,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'2[mm]
			'X軸
			MOVE		P, (-42.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-47.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (-45,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-45,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'1[mm]
			'X軸
			MOVE		P, (-87.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-92.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y軸
			MOVE		P, (-90,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-90,447.5,195,180,0,90,-1)
			DEPART		L, 5
	GIVEARM
END
