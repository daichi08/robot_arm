'!TITLE "<�^�C�g��>"
PROGRAM PRO2
	TAKEARM
	SPEED 30
	'��Ւ��S�����M���Ē��S
	MOVE P, (0,500,250,180,0,0,-1)
	'���M���č���50[mm]
	'�n���h����137[mm]
		' -> Z195�Œ͂� = Z195�Őڒn����
	'���M�ƏՓ˂���ƌ�������O�̂��߉�����O�ɊJ��
'<--- unsupported line --->		RESET IO[64]	'��OFF
'<--- unsupported line --->		SET IO[65]		'�JON
	DELAY 1500		'�ҋ@

	'���M�͂�
	DEPART L, -55
'<--- unsupported line --->		RESET IO[65]	'�JOFF
'<--- unsupported line --->		SET IO[64]		'��ON
	DELAY 1500		'�ҋ@
'<--- unsupported line --->		RESET IO[64]	'��OFF
	DEPART L, 55

	'10~6,5~1[mm]�̏��œ���
	'�ȉ��S��X=90,45,0,-45,90 +- 2.5
		'�ȉ�Y=550 or 552.5 or 547.5
		'10[mm]
			'X��
			MOVE		P, (92.5,550,250,180,0,0,-1)
			DEPART		L, -55
			MOVE		P, (87.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (90,552.5,200,180,0,90,-1)	
			DEPART		L, -5
			MOVE		P, (90,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'9[mm]
			'X��
			MOVE		P, (47.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (42.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (45,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (45,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'8[mm]
			'X��
			MOVE		P, (2.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P,	(-2.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (0,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (0,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'7[mm]
			'X��
			MOVE		P, (-42.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-47.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (-45,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-45,547.5,195,180,0,90,-1)
			DEPART		L, 5
		'6[mm]
			'X��
			MOVE		P, (-87.5,550,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-92.5,550,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (-90,552.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-90,547.5,195,180,0,90,-1)
			'���M���ĂƂԂ���Ȃ��悤��
			DEPART		L, 55

		'��������
			MOVE P, (0,500,250,180,0,0,-1)
			DEPART L, -55
'<--- unsupported line --->				RESET IO[64]	'��OFF
'<--- unsupported line --->				SET IO[65]		'�JON
			DELAY 1500		'�ҋ@
'<--- unsupported line --->				RESET IO[65]	'�JOFF
'<--- unsupported line --->				SET IO[64]		'��ON
			DELAY 1500		'�ҋ@
'<--- unsupported line --->				RESET IO[64]	'��OFF
			DEPART L, 55


		'�ȉ�Y=450 or 452.5 or 447.5
		'5[mm]
			'X��
			MOVE		P, (92.5,450,250,180,0,0,-1)
			DEPART		L, -55
			MOVE		P, (87.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (90,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (90,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'4[mm]
			'X��
			MOVE		P, (47.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (42.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (45,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (45,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'3[mm]
			'X��
			MOVE		P, (2.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-2.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (0,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (0,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'2[mm]
			'X��
			MOVE		P, (-42.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-47.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (-45,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-45,447.5,195,180,0,90,-1)
			DEPART		L, 5
		'1[mm]
			'X��
			MOVE		P, (-87.5,450,200,180,0,0,-1)
			DEPART		L, -5
			MOVE		P, (-92.5,450,195,180,0,0,-1)
			DEPART		L, 5
			'Y��
			MOVE		P, (-90,452.5,200,180,0,90,-1)
			DEPART		L, -5
			MOVE		P, (-90,447.5,195,180,0,90,-1)
			DEPART		L, 5
	GIVEARM
END
