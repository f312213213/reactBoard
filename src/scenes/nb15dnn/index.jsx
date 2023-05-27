import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import MainChart from "../../components/MainChart";


const NB15DNNDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      epoch: 1,
      accCT: 0.8538493219739902,
      lossCT: 0.24949479679235761,
      acc: 0.6770782431428747,
      loss: 0.540959147057792
    },
    {
      epoch: 2,
      accCT: 0.9570016459278439,
      lossCT: 0.047908185628352695,
      acc: 0.7304096633149672,
      loss: 0.5006965704897578
    },
    {
      epoch: 3,
      accCT: 0.971356408381314,
      lossCT: 0.027147166699934635,
      acc: 0.7363582482171613,
      loss: 0.4927905341682508
    },
    {
      epoch: 4,
      accCT: 0.9774971308175081,
      lossCT: 0.02165280031011388,
      acc: 0.7383518570153288,
      loss: 0.48751393341740895
    },
    {
      epoch: 5,
      accCT: 0.9810320388826524,
      lossCT: 0.01876932000943824,
      acc: 0.7391137496907582,
      loss: 0.4825853126686673
    },
    {
      epoch: 6,
      accCT: 0.9833646148258115,
      lossCT: 0.01701077955170471,
      acc: 0.7401484703832819,
      loss: 0.48287951692130215
    },
    {
      epoch: 7,
      accCT: 0.9850333738401069,
      lossCT: 0.01593445915467054,
      acc: 0.7406624410041543,
      loss: 0.4811928860207861
    },
    {
      epoch: 8,
      accCT: 0.9862908049029593,
      lossCT: 0.015119688246639226,
      acc: 0.7409754104392473,
      loss: 0.47491474137749784
    },
    {
      epoch: 9,
      accCT: 0.9872793821814638,
      lossCT: 0.01479891782752325,
      acc: 0.7415132326211116,
      loss: 0.4759761249834253
    },
    {
      epoch: 10,
      accCT: 0.9880721780083934,
      lossCT: 0.014173773211001864,
      acc: 0.7419087334658748,
      loss: 0.47531620511250905
    },
    {
      epoch: 11,
      accCT: 0.9887324719695572,
      lossCT: 0.013874461228116156,
      acc: 0.7420879332132118,
      loss: 0.47388199052607366
    },
    {
      epoch: 12,
      accCT: 0.9892736949165415,
      lossCT: 0.013452263385193388,
      acc: 0.7423715090104775,
      loss: 0.4699739373700563
    },
    {
      epoch: 13,
      accCT: 0.9897404202022908,
      lossCT: 0.013217657075989528,
      acc: 0.7425930109596992,
      loss: 0.468547044105308
    },
    {
      epoch: 14,
      accCT: 0.9901444251122682,
      lossCT: 0.012966738289991475,
      acc: 0.7428250668584838,
      loss: 0.4691658129756765
    },
    {
      epoch: 15,
      accCT: 0.99049419979131,
      lossCT: 0.01276936429642757,
      acc: 0.742835342653038,
      loss: 0.4679314264262369
    },
    {
      epoch: 16,
      accCT: 0.990798181443481,
      lossCT: 0.012466450148625068,
      acc: 0.7429950683153876,
      loss: 0.46412998264612154
    },
    {
      epoch: 17,
      accCT: 0.9910735393533056,
      lossCT: 0.012264027386239978,
      acc: 0.7431462252324865,
      loss: 0.46375939469466837
    },
    {
      epoch: 18,
      accCT: 0.9913176079714521,
      lossCT: 0.011911350175588658,
      acc: 0.7433552945307059,
      loss: 0.46066683473051057
    },
    {
      epoch: 19,
      accCT: 0.9915391014229437,
      lossCT: 0.01157807977698376,
      acc: 0.7435914781666542,
      loss: 0.46149952963803165
    },
    {
      epoch: 20,
      accCT: 0.9917466024064129,
      lossCT: 0.011427512864841826,
      acc: 0.7430372016374455,
      loss: 0.4562960473835006
    },
    {
      epoch: 21,
      accCT: 0.9919404191260012,
      lossCT: 0.011276309664602687,
      acc: 0.7433734866537789,
      loss: 0.4552885254686193
    },
    {
      epoch: 22,
      accCT: 0.9921167043055067,
      lossCT: 0.01092243187412582,
      acc: 0.7437351877375167,
      loss: 0.4531862761161124
    },
    {
      epoch: 23,
      accCT: 0.9922822104847949,
      lossCT: 0.01079384094959751,
      acc: 0.7440155568973038,
      loss: 0.4554686473552571
    },
    {
      epoch: 24,
      accCT: 0.992438320787797,
      lossCT: 0.010619770475917768,
      acc: 0.7443058742571247,
      loss: 0.45199325345745384
    },
    {
      epoch: 25,
      accCT: 0.9925764952757343,
      lossCT: 0.010533405341058304,
      acc: 0.7444998300814814,
      loss: 0.4516445662855178
    },
    {
      epoch: 26,
      accCT: 0.9927066190642599,
      lossCT: 0.010305401761470195,
      acc: 0.7447723573030427,
      loss: 0.4486737912015397
    },
    {
      epoch: 27,
      accCT: 0.9928306022786205,
      lossCT: 0.010039825085243238,
      acc: 0.745100257701652,
      loss: 0.44799254638280056
    },
    {
      epoch: 28,
      accCT: 0.9929491063082441,
      lossCT: 0.00978262452662652,
      acc: 0.745399123707483,
      loss: 0.44398863036041114
    },
    {
      epoch: 29,
      accCT: 0.9930645258900541,
      lossCT: 0.00965000756510811,
      acc: 0.7456540137298348,
      loss: 0.44271267627098765
    },
    {
      epoch: 30,
      accCT: 0.9931717718610112,
      lossCT: 0.009628790998384892,
      acc: 0.7459570386613062,
      loss: 0.4405385595421458
    },
    {
      epoch: 31,
      accCT: 0.9932713525265641,
      lossCT: 0.009478208755303148,
      acc: 0.7462624743465305,
      loss: 0.4374031180790228
    },
    {
      epoch: 32,
      accCT: 0.9933628847139963,
      lossCT: 0.009288147270058713,
      acc: 0.7465252897074056,
      loss: 0.4348483789105748
    },
    {
      epoch: 33,
      accCT: 0.9934538773127964,
      lossCT: 0.009345973187280957,
      acc: 0.7469165484572566,
      loss: 0.42931128472320795
    },
    {
      epoch: 34,
      accCT: 0.9935397092970262,
      lossCT: 0.009121655789493172,
      acc: 0.7472076908100483,
      loss: 0.4346799454254697
    },
    {
      epoch: 35,
      accCT: 0.9936199591766973,
      lossCT: 0.009187099055831049,
      acc: 0.7475205151609672,
      loss: 0.43379796071107996
    },
    {
      epoch: 36,
      accCT: 0.9937034612116606,
      lossCT: 0.00870160833157502,
      acc: 0.7477813305318818,
      loss: 0.432586428615474
    },
    {
      epoch: 37,
      accCT: 0.9937887917394224,
      lossCT: 0.008565803229814591,
      acc: 0.748044798078463,
      loss: 0.42320097774960275
    },
    {
      epoch: 38,
      accCT: 0.993867550207221,
      lossCT: 0.00887795702029332,
      acc: 0.7483842590058497,
      loss: 0.4193302016387614
    },
    {
      epoch: 39,
      accCT: 0.993936063154884,
      lossCT: 0.008573394207357428,
      acc: 0.7487740877062775,
      loss: 0.4144990801118141
    },
    {
      epoch: 40,
      accCT: 0.9940082508584728,
      lossCT: 0.008424287617576427,
      acc: 0.7492262476174406,
      loss: 0.415957001406093
    },
    {
      epoch: 41,
      accCT: 0.994076869502571,
      lossCT: 0.008250208899536227,
      acc: 0.7494874390982842,
      loss: 0.4226338157589121
    },
    {
      epoch: 42,
      accCT: 0.9941466622841284,
      lossCT: 0.007858546165706408,
      acc: 0.7498088458249735,
      loss: 0.4128900580396948
    },
    {
      epoch: 43,
      accCT: 0.9942147940952585,
      lossCT: 0.007952803031827745,
      acc: 0.7501920637234237,
      loss: 0.4184200618156167
    },
    {
      epoch: 44,
      accCT: 0.9942754220148051,
      lossCT: 0.008281996369727753,
      acc: 0.7504977017872093,
      loss: 0.41072184205517287
    },
    {
      epoch: 45,
      accCT: 0.9943319344372483,
      lossCT: 0.007925158350675848,
      acc: 0.7508935244508492,
      loss: 0.4084833942411482
    },
    {
      epoch: 46,
      accCT: 0.9943908547392543,
      lossCT: 0.007713957246524385,
      acc: 0.7512391881887303,
      loss: 0.40944389721681906
    },
    {
      epoch: 47,
      accCT: 0.994449316899969,
      lossCT: 0.0076047544547838235,
      acc: 0.7515523401341697,
      loss: 0.41197578250899797
    },
    {
      epoch: 48,
      accCT: 0.9945045739227201,
      lossCT: 0.0076465332887259456,
      acc: 0.7518585640792699,
      loss: 0.40461122770180075
    },
    {
      epoch: 49,
      accCT: 0.99455841246599,
      lossCT: 0.007386241488426965,
      acc: 0.75230491946834,
      loss: 0.40112400817316635
    },
    {
      epoch: 50,
      accCT: 0.9946121743747166,
      lossCT: 0.007162790289461419,
      acc: 0.7526635740154474,
      loss: 0.3960645724405614
    },
    {
      epoch: 51,
      accCT: 0.9946659831156642,
      lossCT: 0.0069623568606572315,
      acc: 0.7529569813447405,
      loss: 0.3966561732597129
    },
    {
      epoch: 52,
      accCT: 0.9947189516532495,
      lossCT: 0.007025360047851305,
      acc: 0.7533634739328724,
      loss: 0.3950355170771133
    },
    {
      epoch: 53,
      accCT: 0.994768241362542,
      lossCT: 0.007478004382375153,
      acc: 0.7537831386854482,
      loss: 0.39146831250467967
    },
    {
      epoch: 54,
      accCT: 0.9948145982271396,
      lossCT: 0.00692630433649418,
      acc: 0.7541633282983026,
      loss: 0.40081598072551017
    },
    {
      epoch: 55,
      accCT: 0.9948604197605796,
      lossCT: 0.007145015717102318,
      acc: 0.7542151794877163,
      loss: 0.3974043669164643
    },
    {
      epoch: 56,
      accCT: 0.9949072319898546,
      lossCT: 0.0067825807376528996,
      acc: 0.754629137904145,
      loss: 0.3921785017316656
    },
    {
      epoch: 57,
      accCT: 0.9949508768431148,
      lossCT: 0.006526028250682317,
      acc: 0.7549778329309567,
      loss: 0.40221206208532173
    },
    {
      epoch: 58,
      accCT: 0.9949936194819693,
      lossCT: 0.006648417858606019,
      acc: 0.7552409788896871,
      loss: 0.4157285458126733
    },
    {
      epoch: 59,
      accCT: 0.995036382482659,
      lossCT: 0.006373793528340153,
      acc: 0.7552986868130144,
      loss: 0.42185352142005006
    },
    {
      epoch: 60,
      accCT: 0.9950799440375026,
      lossCT: 0.0067498531696186526,
      acc: 0.7554862635542255,
      loss: 0.402111935754155
    },
    {
      epoch: 61,
      accCT: 0.9951178246403333,
      lossCT: 0.006954234278444866,
      acc: 0.7558006919169611,
      loss: 0.39504828644815343
    },
    {
      epoch: 62,
      accCT: 0.9951557376369926,
      lossCT: 0.006482831317484372,
      acc: 0.7561158170533735,
      loss: 0.394684069840483
    },
    {
      epoch: 63,
      accCT: 0.9951953549192559,
      lossCT: 0.006312149779168637,
      acc: 0.756393981765407,
      loss: 0.4013035260429678
    },
    {
      epoch: 64,
      accCT: 0.995233892098717,
      lossCT: 0.005999258363246882,
      acc: 0.7566450155058573,
      loss: 0.39672720131948014
    },
    {
      epoch: 65,
      accCT: 0.9952741707704083,
      lossCT: 0.0063195511015551094,
      acc: 0.7569427206072696,
      loss: 0.39352192481358844
    },
    {
      epoch: 66,
      accCT: 0.9953079021865536,
      lossCT: 0.006299852699914753,
      acc: 0.7571637011313623,
      loss: 0.4156943799913392
    },
    {
      epoch: 67,
      accCT: 0.9953417424459635,
      lossCT: 0.005787651352530809,
      acc: 0.7572393024614615,
      loss: 0.40804552789344345
    },
    {
      epoch: 68,
      accCT: 0.9953793646385951,
      lossCT: 0.005858654998197346,
      acc: 0.7574493337509244,
      loss: 0.40176158947075985
    },
    {
      epoch: 69,
      accCT: 0.995415540955822,
      lossCT: 0.006121906419319892,
      acc: 0.7576444070468578,
      loss: 0.3950136601924896
    },
    {
      epoch: 70,
      accCT: 0.9954495191203881,
      lossCT: 0.005841773952309929,
      acc: 0.757943319950917,
      loss: 0.389860235443411
    },
    {
      epoch: 71,
      accCT: 0.9954846860459132,
      lossCT: 0.005598462623729235,
      acc: 0.7582325974638148,
      loss: 0.39028688687686774
    },
    {
      epoch: 72,
      accCT: 0.9955179502504953,
      lossCT: 0.005542635320472971,
      acc: 0.758524172065794,
      loss: 0.38445163662581483
    },
    {
      epoch: 73,
      accCT: 0.9955486075848526,
      lossCT: 0.006822049260440424,
      acc: 0.7588024377360825,
      loss: 0.38668153775754827
    },
    {
      epoch: 74,
      accCT: 0.995572275811841,
      lossCT: 0.0069680587753367185,
      acc: 0.7590781990871873,
      loss: 0.3828150810197342
    },
    {
      epoch: 75,
      accCT: 0.9955975043107264,
      lossCT: 0.005474746551507739,
      acc: 0.7593638823013897,
      loss: 0.3862848016180733
    },
    {
      epoch: 76,
      accCT: 0.9956298118792706,
      lossCT: 0.0051498720329488734,
      acc: 0.7596167922019958,
      loss: 0.38763875647108686
    },
    {
      epoch: 77,
      accCT: 0.9956618238309896,
      lossCT: 0.0050404440961620755,
      acc: 0.7598758439222971,
      loss: 0.3785068428562593
    },
    {
      epoch: 78,
      accCT: 0.9956927169924197,
      lossCT: 0.005277668571537484,
      acc: 0.7601384204025416,
      loss: 0.38044741276160693
    },
    {
      epoch: 79,
      accCT: 0.9957221254058506,
      lossCT: 0.005159560464147469,
      acc: 0.7604160246460937,
      loss: 0.3807837721682334
    },
    {
      epoch: 80,
      accCT: 0.9957518360999801,
      lossCT: 0.005304276928183177,
      acc: 0.7606793711351794,
      loss: 0.3811178165812825
    },
    {
      epoch: 81,
      accCT: 0.995777747460774,
      lossCT: 0.006026587299857056,
      acc: 0.7608882080214893,
      loss: 0.4161535246196643
    },
    {
      epoch: 82,
      accCT: 0.9958029024719451,
      lossCT: 0.005415630944338298,
      acc: 0.7608363510564317,
      loss: 0.430292989856513
    },
    {
      epoch: 83,
      accCT: 0.9958298123030929,
      lossCT: 0.005007337169524323,
      acc: 0.7608713188836741,
      loss: 0.4088448600251545
    },
    {
      epoch: 84,
      accCT: 0.995855700895653,
      lossCT: 0.005352253633113466,
      acc: 0.7609933115715204,
      loss: 0.39825853381970133
    },
    {
      epoch: 85,
      accCT: 0.9958808851538238,
      lossCT: 0.004810933278159039,
      acc: 0.7611481521942819,
      loss: 0.3920527214920798
    },
    {
      epoch: 86,
      accCT: 0.9959074904829819,
      lossCT: 0.0047819393568450394,
      acc: 0.7613340683223665,
      loss: 0.3894920545492985
    },
    {
      epoch: 87,
      accCT: 0.9959322199317979,
      lossCT: 0.005076131904863122,
      acc: 0.7615243355895198,
      loss: 0.3884072891732519
    },
    {
      epoch: 88,
      accCT: 0.9959552413928583,
      lossCT: 0.005594241407888154,
      acc: 0.7617310826168504,
      loss: 0.38647834506145745
    },
    {
      epoch: 89,
      accCT: 0.9959783700312147,
      lossCT: 0.004760647020516472,
      acc: 0.7619329956612846,
      loss: 0.3814159821170245
    },
    {
      epoch: 90,
      accCT: 0.9960037745674204,
      lossCT: 0.004931838760232992,
      acc: 0.7618088114631268,
      loss: 0.38254337301549984
    },
    {
      epoch: 91,
      accCT: 0.9960292570339226,
      lossCT: 0.0044589271042128325,
      acc: 0.7620592623255974,
      loss: 0.38132754453392914
    },
    {
      epoch: 92,
      accCT: 0.9960554075537261,
      lossCT: 0.0046095929591959345,
      acc: 0.7622898819372635,
      loss: 0.3825029334587644
    },
    {
      epoch: 93,
      accCT: 0.9960795950075114,
      lossCT: 0.004962485288143731,
      acc: 0.762481359548347,
      loss: 0.38016479341096654
    },
    {
      epoch: 94,
      accCT: 0.9961022103425139,
      lossCT: 0.004687906458926161,
      acc: 0.7627304935640142,
      loss: 0.3785706331101499
    },
    {
      epoch: 95,
      accCT: 0.9961258106350158,
      lossCT: 0.004966752731205313,
      acc: 0.7627046385476756,
      loss: 0.3752689754316049
    },
    {
      epoch: 96,
      accCT: 0.9961460266054046,
      lossCT: 0.005078759682320473,
      acc: 0.7629572663658349,
      loss: 0.3737031566773274
    },
    {
      epoch: 97,
      accCT: 0.996166049323467,
      lossCT: 0.004633873127599857,
      acc: 0.7631725950758587,
      loss: 0.37425406900949254
    },
    {
      epoch: 98,
      accCT: 0.9961885143511043,
      lossCT: 0.004318292294245462,
      acc: 0.7633681939553845,
      loss: 0.38948650773643523
    },
    {
      epoch: 99,
      accCT: 0.9962111846630618,
      lossCT: 0.004709727562055056,
      acc: 0.7635656881702039,
      loss: 0.3754292889389881
    },
    {
      epoch: 100,
      accCT: 0.9962339999142641,
      lossCT: 0.004102203812751512,
      acc: 0.7637214224005855,
      loss: 0.3720560530128405
    },
    {
      epoch: 101,
      accCT: 0.996255602155413,
      lossCT: 0.0045978209830689325,
      acc: 0.763514440420062,
      loss: 0.3805556163307308
    },
    {
      epoch: 102,
      accCT: 0.9962759773183313,
      lossCT: 0.00467695844254364,
      acc: 0.7636699447798174,
      loss: 0.3769147243610648
    },
    {
      epoch: 103,
      accCT: 0.9962954423072176,
      lossCT: 0.004643333951778303,
      acc: 0.7638640888901644,
      loss: 0.370686290222545
    },
    {
      epoch: 104,
      accCT: 0.996314821776396,
      lossCT: 0.004166671550270587,
      acc: 0.7640914621279221,
      loss: 0.3702838613774425
    },
    {
      epoch: 105,
      accCT: 0.9963357729941421,
      lossCT: 0.003926815570659008,
      acc: 0.7643059452836828,
      loss: 0.36779776712258655
    },
    {
      epoch: 106,
      accCT: 0.9963570316755994,
      lossCT: 0.003865954246834663,
      acc: 0.7645142914712891,
      loss: 0.36444539663403536
    },
    {
      epoch: 107,
      accCT: 0.9963791250071911,
      lossCT: 0.003681382953873931,
      acc: 0.7647459236688392,
      loss: 0.3659300979717757
    },
    {
      epoch: 108,
      accCT: 0.9963992315789928,
      lossCT: 0.005129776925754391,
      acc: 0.7649704206359479,
      loss: 0.3669370623059975
    },
    {
      epoch: 109,
      accCT: 0.9964132125703444,
      lossCT: 0.006881401686870778,
      acc: 0.7652047701584276,
      loss: 0.36299116817093635
    },
    {
      epoch: 110,
      accCT: 0.9964310941488846,
      lossCT: 0.003725737737816682,
      acc: 0.765425338994625,
      loss: 0.3632213003182596
    },
    {
      epoch: 111,
      accCT: 0.9964509319444621,
      lossCT: 0.0040050159416790375,
      acc: 0.7654027206491131,
      loss: 0.3622196918541147
    },
    {
      epoch: 112,
      accCT: 0.996468805933591,
      lossCT: 0.004687100057550276,
      acc: 0.7655684952588044,
      loss: 0.3631803411846013
    },
    {
      epoch: 113,
      accCT: 0.9964860846167025,
      lossCT: 0.003921496894685141,
      acc: 0.7657575651194698,
      loss: 0.36999362741791925
    },
    {
      epoch: 114,
      accCT: 0.9965059888659057,
      lossCT: 0.0034170053940898973,
      acc: 0.7659166665502297,
      loss: 0.3620870265849801
    },
    {
      epoch: 115,
      accCT: 0.9965261496742319,
      lossCT: 0.0034397728312830864,
      acc: 0.7661315861136414,
      loss: 0.3623298481684323
    },
    {
      epoch: 116,
      accCT: 0.9965448792306533,
      lossCT: 0.004164038199310368,
      acc: 0.7659681582635687,
      loss: 0.3606483607098114
    },
    {
      epoch: 117,
      accCT: 0.9965602862908973,
      lossCT: 0.0042484178408293315,
      acc: 0.7658783779587857,
      loss: 0.37443726596444155
    },
    {
      epoch: 118,
      accCT: 0.996577572193205,
      lossCT: 0.003537327136802097,
      acc: 0.7657181625218354,
      loss: 0.36165898657122325
    },
    {
      epoch: 119,
      accCT: 0.9965955122657444,
      lossCT: 0.0037448814916574494,
      acc: 0.7659323938595232,
      loss: 0.3588152312955191
    },
    {
      epoch: 120,
      accCT: 0.9966122480282872,
      lossCT: 0.003958148121382014,
      acc: 0.7660732230012731,
      loss: 0.362621125324752
    },
    {
      epoch: 121,
      accCT: 0.9966285486028802,
      lossCT: 0.0035685925871667616,
      acc: 0.7661795733973037,
      loss: 0.36392681716486464
    },
    {
      epoch: 122,
      accCT: 0.9966445030262752,
      lossCT: 0.004142808630824435,
      acc: 0.7663665614848914,
      loss: 0.35732101724129317
    },
    {
      epoch: 123,
      accCT: 0.9966605896164912,
      lossCT: 0.0039000906062570968,
      acc: 0.7665640067222507,
      loss: 0.35683843655179637
    },
    {
      epoch: 124,
      accCT: 0.9966766454788468,
      lossCT: 0.0034218227377078953,
      acc: 0.7664326572603033,
      loss: 0.3580840035926464
    },
    {
      epoch: 125,
      accCT: 0.9966941701699488,
      lossCT: 0.003108036626845375,
      acc: 0.7666540397692096,
      loss: 0.35095676306144213
    },
    {
      epoch: 126,
      accCT: 0.9967118566450865,
      lossCT: 0.0031415600109234764,
      acc: 0.7665535008260446,
      loss: 0.3526370556548584
    },
    {
      epoch: 127,
      accCT: 0.9967276229991676,
      lossCT: 0.004574382811559963,
      acc: 0.766746977040934,
      loss: 0.35783746076184647
    },
    {
      epoch: 128,
      accCT: 0.9967378655575817,
      lossCT: 0.006273979035049367,
      acc: 0.7669585305590962,
      loss: 0.35564796049003455
    },
    {
      epoch: 129,
      accCT: 0.996752779676307,
      lossCT: 0.003405407658604796,
      acc: 0.7671376986559048,
      loss: 0.35487336948398474
    },
    {
      epoch: 130,
      accCT: 0.9967688386854918,
      lossCT: 0.0029331140803750154,
      acc: 0.7673327308292537,
      loss: 0.35718500544858534
    },
    {
      epoch: 131,
      accCT: 0.9967858335986641,
      lossCT: 0.0029297958433416853,
      acc: 0.7675405186276103,
      loss: 0.35007031030895175
    },
    {
      epoch: 132,
      accCT: 0.9968017593303823,
      lossCT: 0.00346576871371744,
      acc: 0.7677463653475739,
      loss: 0.3504900657391363
    },
    {
      epoch: 133,
      accCT: 0.9968172967063714,
      lossCT: 0.0030887833181340685,
      acc: 0.7676347702048546,
      loss: 0.3516593372174936
    },
    {
      epoch: 134,
      accCT: 0.9968331274778947,
      lossCT: 0.003030723538449255,
      acc: 0.7678280525891356,
      loss: 0.34887577420057253
    },
    {
      epoch: 135,
      accCT: 0.9968460613155957,
      lossCT: 0.004391269931743663,
      acc: 0.7680263660212819,
      loss: 0.3473426260689432
    },
    {
      epoch: 136,
      accCT: 0.9968585310885625,
      lossCT: 0.003582528071298573,
      acc: 0.7682273175365241,
      loss: 0.3471684782773025
    },
    {
      epoch: 137,
      accCT: 0.9968729011760735,
      lossCT: 0.003506130490578748,
      acc: 0.7684362648531448,
      loss: 0.3532877060794091
    },
    {
      epoch: 138,
      accCT: 0.9968879313572593,
      lossCT: 0.003002169595128948,
      acc: 0.7684154281782549,
      loss: 0.3517005146704903
    },
    {
      epoch: 139,
      accCT: 0.9969044425842924,
      lossCT: 0.002435244316223401,
      acc: 0.7686044033183608,
      loss: 0.3567587988552197
    },
    {
      epoch: 140,
      accCT: 0.9969199073981054,
      lossCT: 0.0029153087202108247,
      acc: 0.7687964949959009,
      loss: 0.3539782662031262
    },
    {
      epoch: 141,
      accCT: 0.9969314214605722,
      lossCT: 0.005525643255004866,
      acc: 0.7689821003943451,
      loss: 0.35219406480937043
    },
    {
      epoch: 142,
      accCT: 0.9969401366962409,
      lossCT: 0.003803052140020266,
      acc: 0.7691247426262198,
      loss: 0.3520418559164964
    },
    {
      epoch: 143,
      accCT: 0.99695290153071,
      lossCT: 0.0031589008371614097,
      acc: 0.7693040980849155,
      loss: 0.3473871961351513
    },
    {
      epoch: 144,
      accCT: 0.9969678537815995,
      lossCT: 0.0026300779508006394,
      acc: 0.7694901163263839,
      loss: 0.3463754801787147
    },
    {
      epoch: 145,
      accCT: 0.9969834955582707,
      lossCT: 0.0023581793622374707,
      acc: 0.7694429884585299,
      loss: 0.35153253734573836
    },
    {
      epoch: 146,
      accCT: 0.9969991421477394,
      lossCT: 0.0023184661762802226,
      acc: 0.7695736457673155,
      loss: 0.3551538800315339
    },
    {
      epoch: 147,
      accCT: 0.9970149049847763,
      lossCT: 0.002321673589058151,
      acc: 0.7697452253611513,
      loss: 0.3504134277964747
    },
    {
      epoch: 148,
      accCT: 0.9970290025939113,
      lossCT: 0.002743596823329539,
      acc: 0.7697017488553543,
      loss: 0.35006360051243807
    },
    {
      epoch: 149,
      accCT: 0.9970388836371973,
      lossCT: 0.005809266303020771,
      acc: 0.7698624309643295,
      loss: 0.35422659324583156
    },
    {
      epoch: 150,
      accCT: 0.9970495360238212,
      lossCT: 0.0029113746760522077,
      acc: 0.7700326234795326,
      loss: 0.3512123463920845
    }
  ]


  return (
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="IOT23 DNN 2分類" subtitle="NTPUNSL" />
        </Box>

        {/* GRID & CHARTS */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mb={'40px'}
        >
          <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
          >
            <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
            >
              <Box>
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                  在相同 Epoch 值下，是否有 ACT 值對準確度的影響
                </Typography>
              </Box>
              {/*<Box>*/}
              {/*  <IconButton>*/}
              {/*    <DownloadOutlinedIcon*/}
              {/*      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}*/}
              {/*    />*/}
              {/*  </IconButton>*/}
              {/*</Box>*/}
            </Box>
            <Box height="230px" m="-20px 0 0 0">
              <BarChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'accCT'} bar2={'acc'} />
            </Box>
          </Box>
          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
          >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                關於準確度 - 每筆資料之細節
              </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
            >

              <Box
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                Epoch 值
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  準確度
                </Typography>
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  準確度（有 ACT 值）
                </Typography>
              </Box>
            </Box>
            {data.map(({epoch, acc, accCT}) => (
                <Box
                    key={epoch}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                >

                  <Box
                      backgroundColor={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                  >
                    {epoch}
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {acc}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {accCT}
                    </Typography>
                  </Box>
                </Box>
            ))}
          </Box>

          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              在相同 Epoch 值下，是否有 ACT 值對準確度的影響
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'acc'} bar2={'accCT'} />
            </Box>
          </Box>
          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              Epoch 值變化時，準確度的變化紀錄（無 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'acc'} />
            </Box>
          </Box>
          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              Epoch 值變化時，準確度的變化紀錄（有 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'accCT'} />
            </Box>
          </Box>
        </Box>

        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >
          <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
          >
            <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
            >
              <Box>
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                  在相同 Epoch 值下，是否有 ACT 值對 Loss的影響
                </Typography>
              </Box>
              {/*<Box>*/}
              {/*  <IconButton>*/}
              {/*    <DownloadOutlinedIcon*/}
              {/*      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}*/}
              {/*    />*/}
              {/*  </IconButton>*/}
              {/*</Box>*/}
            </Box>
            <Box height="230px" m="-20px 0 0 0">
              <BarChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'lossCT'} bar2={'loss'} />
            </Box>
          </Box>
          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
          >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                關於 Loss - 每筆資料之細節
              </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
            >

              <Box
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                Epoch 值
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  Loss
                </Typography>
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  Loss（有 ACT 值）
                </Typography>
              </Box>
            </Box>
            {data.map(({epoch, loss, lossCT}) => (
                <Box
                    key={epoch}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                >

                  <Box
                      backgroundColor={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                  >
                    {epoch}
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {loss}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {lossCT}
                    </Typography>
                  </Box>
                </Box>
            ))}
          </Box>

          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              在相同 Epoch 值下，是否有 ACT 值對 Loss 的影響
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'loss'} bar2={'lossCT'} />
            </Box>
          </Box>

          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              Epoch 值變化時，Loss 的變化紀錄（無 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'loss'} />
            </Box>
          </Box>
          <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              padding="30px"
          >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
            >
              Epoch 值變化時，Loss 的變化紀錄（有 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'lossCT'} />
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default NB15DNNDashboard;
