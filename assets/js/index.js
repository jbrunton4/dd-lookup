const hundreds = "000-099,Computer Science, Information, and General Works;100-199,Philosophy and Psychology;200-299,Religion;300-399,Social Sciences;400-499,Language;500-599,Science;600-699,Technology;700-799,Arts and Recreation;800-899,Literature;900-999,History and Geography;".split(";");
const tens = "000-009,Computer science, knowledge & systems;010-019,Bibliographies;020-029,Library & information sciences;030-039,Encyclopaedias and books of facts;040-049,Unassigned;050-059,Magazines, journals and serials;060-069,Associations, organisations and museums;070-079,News media, journalism and publishing;080-089,Quotations;090-099,Manuscripts and rare books;100-109,Philosophy;110-119,Metaphysics;120-129,Epistemology;130-139,Parapsychology and occultism;140-149,Philosophical schools of thought;150-159,Psychology;160-169,Logic;170-179,Ethics;180-189,Ancient, medieval & eastern philosphy;190-199,Modern western philosophy;200-209,Religion;210-219,Philosophy & theory of religion;220-229,The Bible;230-239,Christianity & Christian theology;240-249,Christian practice & observance;250-259,Christian pastoral practice & religious orders;260-269,Christian organization, social work & worship;270-279,History of Christianity;280-289,Christian denominations;290-299,Other religions;300-309,Social sciences, sociology & anthropology;310-319,Statistics;320-329,Political science;330-339,Economics;340-349,Law;350-359,Public administration & military science;360-369,Social problems & social services;370-379,Education;380-389,Commerce, communications & transportation;390-399,Customs, etiquette & folklore;400-409,Language;410-419,Linguistics;420-429,English & Old English languages;430-439,German & related languages;440-449,French & related languages;450-459,Italian, Romanian & related languages;460-469,Spanish & Portuguese languages;470-479,Latin & Italic languages;480-489,Classical & modern Greek languages;490-499,Other languages;500-509,Science;510-519,Mathematics;520-529,Astronomy;530-539,Physics;540-549,Chemistry;550-559,Earth sciences & geology;560-569,Fossils & prehistoric life;570-579,Life sciences; biology;580-589,Plants (Botany);590-599,Animals (Zoology);600-609,Technology;610-619,Medicine & health;620-629,Engineering;630-639,Agriculture;640-649,Home & family management;650-659,Management & public relations;660-669,Chemical engineering;670-679,Manufacturing;680-689,Manufacture for specific uses;690-699,Building & construction;700-709,Arts;710-719,Landscaping & area planning;720-729,Architecture;730-739,Sculpture, ceramics & metalwork;740-749,Drawing & decorative arts;750-759,Painting;760-769,Graphic arts;770-779,Photography & computer art;780-789,Music;790-799,Sports, games & entertainment;800-809,Literature, rhetoric & criticism;810-819,American literature in English;820-829,English & Old English literatures;830-839,German & related literatures;840-849,French & related literatures;850-859,Italian, Romanian & related literatures;860-869,Spanish & Portuguese literatures;870-879,Latin & Italic literatures;880-889,Classical & modern Greek literatures;890-899,Other literatures;900-909,History;910-919,Geography & travel;920-929,Biography & genealogy;930-939,History of ancient world (to ca. 499);940-949,History of Europe;950-959,History of Asia;960-969,History of Africa;970-979,History of North America;980-989,History of South America;".split(";");
const ones = `000,Computer science, information and general works;001,Knowledge;002,The book (writing, libraries, and book-related topics);003,Systems;004,Data processing and computer science;005,Computer programming, programs and data;006,Special computer methods (e.g. AI, multimedia, VR)[4];007-009,[Unassigned];010,Bibliography;011,Bibliographies;012,Bibliographies of individuals;013,[Unassigned];014,Bibliographies of anonymous and pseudonymous works;015,Bibliographies of works from specific places;016,Bibliographies of works on specific subjects;017,General subject catalogs;018,Catalogs arranged by author, date, etc.;019,Dictionary catalogs;020,Library and information sciences;021,Library relationships (with archives, information centers, etc.);022,Administration of physical plant;023,Personnel management;024,[Unassigned];025,Library operations;026,Libraries for specific subjects;027,General libraries;028,Reading and use of other information media;029,[Unassigned];030,General encyclopedic works;031,Encyclopedias in American English;032,Encyclopedias in English;033,Encyclopedias in other Germanic languages;034,Encyclopedias in French, Occitan, and Catalan;035,Encyclopedias in Italian, Romanian, and related languages;036,Encyclopedias in Spanish and Portuguese;037,Encyclopedias in Slavic languages;038,Encyclopedias in Scandinavian languages;039,Encyclopedias in other languages;050,General serial publications;051,Serials in American English;052,Serials in English;053,Serials in other Germanic languages;054,Serials in French, Occitan, and Catalan;055,Serials in Italian, Romanian, and related languages;056,Serials in Spanish and Portuguese;057,Serials in Slavic languages;058,Serials in Scandinavian languages;059,Serials in other languages;060,General organizations and museum science;061,Organizations in North America;062,Organizations in British Isles; in England;063,Organizations in central Europe; in Germany;064,Organizations in France and Monaco;065,Organizations in Italy and adjacent islands;066,Organizations in Iberian peninsula and adjacent islands;067,Organizations in eastern Europe; in Russia;068,Organizations in other geographic areas;069,Museum science;070,News media, journalism, and publishing;071,Newspapers in North America;072,Newspapers in British Isles; in England;073,Newspapers in central Europe; in Germany;074,Newspapers in France and Monaco;075,Newspapers in Italy and adjacent islands;076,Newspapers in Iberian peninsula and adjacent islands;077,Newspapers in eastern Europe; in Russia;078,Newspapers in Scandinavia;079,Newspapers in other geographic areas;080,General collections;081,Collections in American English;082,Collections in English;083,Collections in other Germanic languages;084,Collections in French, Occitan, Catalan;085,Collections in Italian, Romanian, and related languages;086,Collections in Spanish and Portuguese;087,Collections in Slavic languages;088,Collections in Scandinavian languages;089,Collections in other languages;090,Manuscripts and rare books;091,Manuscripts;092,Block books;093,Incunabula;094,Printed books;095,Books notable for bindings;096,Books notable for illustrations;097,Books notable for ownership or origin;098,Prohibited works, forgeries, and hoaxes;099,Books notable for format;100,Philosophy and psychology;101,Theory of philosophy;102,Miscellany;103,Dictionaries and encyclopedias;104,No longer used — formerly "Essays";105,Serial publications;106,Organizations and management;107,Education, research, related topics of philosophy;108,Groups of people;109,History and collected biography;110,Metaphysics;111,Ontology;112,No longer used — formerly Methodology;113,Cosmology (Philosophy of nature);114,Space;115,Time;116,Change;117,Structure;118,Force and energy;119,Number and quantity;120,Epistemology, causation, and humankind;121,Epistemology (Theory of knowledge);122,Causation;123,Determinism and indeterminism;124,Teleology;125,No longer used — formerly Infinity;126,The self;127,The unconscious and the subconscious;128,Humankind;129,Origin and destiny of individual souls;130,Parapsychology and occultism;131,Parapsychological and occult methods for achieving well-being, happiness, success;132,No longer used — formerly "Mental derangements";133,Specific topics in parapsychology and occultism;134,No longer used — formerly "Mesmerism and Clairvoyance";135,Dreams and mysteries;136,No longer used — formerly "Mental characteristics";137,Divinatory graphology;138,Physiognomy;139,Phrenology;140,Specific philosophical schools and viewpoints;141,Idealism and related systems and doctrines;142,Critical philosophy;143,Bergsonism and intuitionism;144,Humanism and related systems and doctrines;145,Sensationalism;146,Naturalism and related systems and doctrines;147,Pantheism and related systems and doctrines;148,Dogmatism, eclecticism, liberalism, syncretism, and traditionalism;149,Other philosophical systems and doctrines;150,Psychology;151,No longer used — formerly "Intellect";152,Sensory perception, movement, emotions, and physiological drives;153,Conscious mental processes and intelligence;154,Subconscious and altered states and processes;155,Differential and developmental psychology;156,Comparative psychology;157,No longer used — formerly "Emotions";158,Applied psychology;159,No longer used — formerly "Will";160,Philosophical logic;161,Induction;162,Deduction;163-164,Not assigned or no longer used;165,Fallacies and sources of error;166,Syllogisms;167,Hypotheses;168,Argument and persuasion;169,Analogy;170,Ethics (Moral philosophy);171,Ethical systems;172,Political ethics;173,Ethics of family relationships;174,Occupational ethics;175,Ethics of recreation, leisure, public performances, communication;176,Ethics of sex and reproduction;177,Ethics of social relations;178,Ethics of consumption;179,Other ethical norms;180,Ancient, medieval, eastern philosophy;181,Eastern philosophy;182,Pre-Socratic Greek philosophies;183,Sophistic, Socratic, related Greek philosophies;184,Platonic philosophy;185,Aristotelian philosophy;186,Skeptic and Neoplatonic philosophies;187,Epicurean philosophy;188,Stoic philosophy;189,Medieval Western philosophy;190,Modern Western and other noneastern philosophy;191,Philosophy of the United States and Canada;192,Philosophy of the British Isles;193,Philosophy of Germany and Austria;194,Philosophy of France;195,Philosophy of Italy;196,Philosophy of Spain and Portugal;197,Philosophy of Russia;198,Philosophy of Scandinavia and Finland;199,Philosophy in other geographic areas;200,Religion;201,Religious mythology, general classes of religion, interreligious relations and attitudes, social theology;202,Doctrines;203,Public worship and other practices;204,Religious experience, life, practice;205,Religious ethics;206,Leaders and organization;207,Missions and religious education;208,Sources;209,Sects and reform movements;210,Philosophy and theory of religion;211,Concepts of God;212,Existence, ways of knowing God, attributes of God;213,Creation;214,Theodicy;215,Science and religion;216,No longer used—formerly Evil;217,No longer used—formerly Prayer;218,Humankind;219,No longer used—formerly Analogies;220,Bible;221,Old Testament;222,Historical books of Old Testament;223,Poetic books of Old Testament;224,Prophetic books of Old Testament;225,New Testament;226,Gospels and Acts;227,Epistles;228,Revelation (Apocalypse);229,Apocrypha, pseudepigrapha, and inter-testamental works;230,Christianity;231,God;232,Jesus Christ and his family;233,Humankind;234,Salvation and grace;235,Spiritual beings;236,Eschatology;237,No longer used—formerly Future state;238,Creeds, confessions of faith, covenants, and catechisms;239,Apologetics and polemics;240,Christian moral and devotional theology;241,Christian ethics;242,Devotional literature;243,Evangelistic writings for individuals and families;244,No longer used—formerly Religious fiction;245,No longer used—formerly Hymnology;246,Use of art in Christianity;247,Church furnishings and related articles;248,Christian experience, practice, life;249,Christian observances in family life250,Local Christian church and Christian religious orders;251,Preaching (Homiletics);252,Texts of sermons;253,Pastoral office and work (Pastoral theology);254,Parish administration;255,Religious congregations and orders;256,No longer used — formerly "Religious societies";257,No longer used — formerly "Parochial schools, libraries", etc.;258,No longer used — formerly "Parochial medicine";259,Pastoral care of families, of specific groups of people;260,Christian social and ecclesiastical theology;261,Social theology and interreligious relations and attitudes;262,Ecclesiology;263,Days, times, places of religious observance;264,Public worship;265,Sacraments, other rites and acts;266,Missions;267,Associations for religious work;268,Religious education;269,Spiritual renewal;270,History, geographic treatment, biography of Christianity;271,Religious congregations and orders in church history;272,Persecutions in church history;273,Doctrinal controversies and heresies in general church history;274,Christianity in Europe;275,Christianity in Asia;276,Christianity in Africa;277,Christianity in North America;278,Christianity in South America;279,History of Christianity in other areas;280,Denominations and sects of Christian church;281,Early church and Eastern churches;282,Roman Catholic Church;283,Anglican churches;284,Protestant denominations of Continental origin and related body;285,Presbyterian churches, Reformed churches centered in America, Congregational churches;286,Baptist, Restoration Movement, Adventist churches;287,Methodist churches; churches related to Methodism;288,No longer used — formerly "Unitarian";289,Other denominations and sects;290,Other religions;291,No longer used — formerly "Comparative religion";292,Classical religion (Greek and Roman religion);293,Germanic religion;294,Religions of Indic origin;295,Zoroastrianism (Mazdaism, Parseeism);296,Judaism;297,Islam, Bábism and Baháʼí Faith;298,No longer used — formerly "Mormonism";299,Religions not provided for elsewhere;300,Social sciences;301,Sociology and anthropology;302,Social interaction;303,Social processes;304,Factors affecting social behavior;305,Groups of people;306,Culture and institutions;307,Communities;308,No longer used — formerly "Polygraphy";309,No longer used — formerly "History of sociology";310,Collections of general statistics;311,No longer used — formerly "Theory and methods";312,No longer used — formerly "Population";313,No longer used — formerly "Special topics";314,General statistics of Europe;315,General statistics of Asia;316,General statistics of Africa;317,General statistics of North America;318,General statistics of South America;319,General statistics of Australasia, Pacific Ocean islands, Atlantic Ocean islands, Arctic islands, Antarctica;320,Political science (Politics and government);321,Systems of governments and states;322,Relation of state to organized groups and their members;323,Civil and political rights;324,The political process;325,International migration and colonization;326,Slavery and emancipation;327,International relations;328,The legislative process;329,Not assigned or no longer used;330,Economics;331,Labor economics;332,Financial economics;333,Economics of land and energy;334,Cooperatives;335,Socialism and related systems;336,Public finance;337,International economics;338,Production;339,Macroeconomics and related topics;340,Law;341,Law of nations;342,Constitutional and administrative law;343,Military, defense, public property, public finance, tax, commerce (trade), industrial law;344,Labor, social service, education, cultural law;345,Criminal law;346,Private law;347,Procedure and courts;348,Laws, regulations, cases;349,Law of specific jurisdictions, areas, socioeconomic regions, regional intergovernmental organizations;350,Public administration and military science;351,Public administration;352,General considerations of public administration;353,Specific fields of public administration;354,Public administration of economy and environment;355,Military science;356,Foot forces and warfare;357,Mounted forces and warfare;358,Air and other specialized forces and warfare; engineering and related services;359,Sea forces and warfare;360,Social problems and services; associations;361,Social problems and services;362,Social problems of and services to groups of people;363,Other social problems and services;364,Criminology;365,Penal and related institutions;366,Secret associations and societies;367,General clubs;368,Insurance;369,Associations;370,Education;371,Schools and their activities, special education;372,Primary education (elementary education);373,Secondary education;374,Adult education;375,Curricula;376,No longer used — formerly "Education of women";377,No longer used — formerly "Ethical education";378,Higher education (Tertiary education);379,Public policy issues in education;380,Commerce, communications transportation;381,Commerce (Trade);382,International commerce (Foreign trade);383,Postal communication;384,Communications;385,Railroad transportation;386,Inland waterway and ferry transportation;387,Water, air, space transportation;388,Transportation;389,Metrology and standardization;390,Customs, etiquette, folklore;391,Costume and personal appearance;392,Customs of life cycle and domestic life;393,Death customs;394,General customs;395,Etiquette (Manners);396,No longer used — formerly "Women's position and treatment";397,No longer used — formerly "outcast studies";398,Folklore;399,Customs of war and diplomacy;400,Language;401,Philosophy and theory, international languages;402,Miscellany;403,Dictionaries, encyclopedias, concordances;404,Special topics of language;405,Serial publications;406,Organizations and management;407,Education, research, related topics;408,Groups of people;409,Geographic treatment and biography;410,Linguistics;411,Writing systems of standard forms of languages;412,Etymology of standard forms of languages;413,Dictionaries of standard forms of languages;414,Phonology and phonetics of standard forms of languages;415,Grammar of standard forms of languages;416,No longer used — formerly "Prosody";417,Dialectology and historical linguistics;418,Standard usage (Prescriptive linguistics);419,Sign languages;420,English and Old English (Anglo-Saxon);421,Writing system, phonology, phonetics of standard English;422,Etymology of standard English;423,Dictionaries of standard English;424,No longer used — formerly "English thesauruses";425,Grammar of standard English;426,No longer used — formerly "English prosodies";427,Historical and geographical variations, modern nongeographic variations of English;428,Standard English usage (Prescriptive linguistics);429,Old English (Anglo-Saxon);430,German and related languages;431,Writing systems, phonology, phonetics of standard German;432,Etymology of standard German;433,Dictionaries of standard German;434,Not assigned or no longer used;435,Grammar of standard German;436,Not assigned or no longer used;437,Historical and geographic variations, modern nongeographic variations of German;438,Standard German usage (Prescriptive linguistics);439,Other Germanic languages;440,French and related Romance languages;441,Writing systems, phonology, phonetics of standard French;442,Etymology of standard French;443,Dictionaries of standard French;444,Not assigned or no longer used;445,Grammar of standard French;446,Not assigned or no longer used;447,Historical and geographic variations, modern nongeographic variations of French;448,Standard French usage (Prescriptive linguistics);449,Occitan Catalan, Franco-Provençal;450,Italian, Dalmatian, Romanian, Rhaetian, Sardinian, Corsican;451,Writing systems, phonology, phonetics of standard Italian;452,Etymology of standard Italian;453,Dictionaries of standard Italian;454,Not assigned or no longer used;455,Grammar of standard Italian;456,Not assigned or no longer used;457,Historical and geographic variations, modern nongeographic variations of Italian;458,Standard Italian usage (Prescriptive linguistics);459,Romanian, Rhaetian, Sardinian, Corsican;460,Spanish, Portuguese, Galician;461,Writing systems, phonology, phonetics of standard Spanish;462,Etymology of standard Spanish;463,Dictionaries of standard Spanish;464,Not assigned or no longer used;465,Grammar of standard Spanish;466,Not assigned or no longer used;467,Historical and geographic variations, modern nongeographic variations of Spanish;468,Standard Spanish usage (Prescriptive linguistics);469,Portuguese;470,Latin and related Italic languages;471,Writing systems, phonology, phonetics of classical Latin;472,Etymology of classical Latin;473,Dictionaries of classical Latin;474,Not assigned or no longer used;475,Grammar of classical Latin;476,Not assigned or no longer used;477,Old, postclassical, Vulgar Latin;478,Classical Latin usage (Prescriptive linguistics);479,Other Italic languages;480,Classical Greek and related Hellenic languages;481,Writing systems, phonology, phonetics of classical Greek;482,Etymology of classical Greek;483,Dictionaries of classical Greek;484,Not assigned or no longer used;485,Grammar of classical Greek;486,Not assigned or no longer used;487,Preclassical and postclassical Greek;488,Classical Greek usage (Prescriptive linguistics);489,Other Hellenic languages;490,Other languages;491,East Indo-European and Celtic languages;492,Afro-Asiatic languages;493,Non-Semitic Afro-Asiatic languages;494,Altic, Uralic, Hyperborean, Dravidian languages, miscellaneous languages of south Asia;495,Languages of East and Southeast Asia;496,African languages;497,North American native languages;498,South American native languages;499,Non-Austronesian languages of Oceania, Austronesian languages, miscellaneous languages;500,Natural sciences and mathematics;501,Philosophy and theory;502,Miscellany;503,Dictionaries, encyclopedias, concordances;504,Not assigned or no longer used;505,Serial publications;506,Organizations and management;507,Education, research, related topics;508,Natural history;509,History, geographic treatment, biography;510,Mathematics;511,General principles of mathematics;512,Algebra;513,Arithmetic;514,Topology;515,Analysis;516,Geometry;517,Not assigned or no longer used;518,Numerical analysis;519,Probabilities and applied mathematics;520,Astronomy and allied sciences;521,Celestial mechanics;522,Techniques, procedures, apparatus, equipment, materials;523,Specific celestial bodies and phenomena;524,Not assigned or no longer used;525,Earth (Astronomical geography);526,Mathematical geography;527,Celestial navigation;528,Ephemerides;529,Chronology;530,Physics;531,Classical mechanics;532,Fluid mechanics;533,Pneumatics (Gas mechanics);534,Sound and related vibrations;535,Light and related radiation;536,Heat;537,Electricity and electronics;538,Magnetism;539,Modern physics;540,Chemistry and allied sciences;541,Physical chemistry;542,Techniques, procedures, apparatus, equipment, materials;543,Analytical chemistry;544,No longer used — formerly "Qualitative analysis";545,No longer used — formerly "Quantitative analysis";546,Inorganic chemistry;547,Organic chemistry;548,Crystallography;549,Mineralogy;550,Earth sciences;551,Geology, hydrology, meteorology;552,Petrology;553,Economic geology;554,Earth sciences of Europe;555,Earth sciences of Asia;556,Earth sciences of Africa;557,Earth sciences of North America;558,Earth sciences of South America;559,Earth sciences of Australasia, Pacific Ocean islands, Atlantic Ocean islands, Arctic islands, Antarctica, extraterrestrial worlds;560,Paleontology;561,Paleobotany, fossil microorganisms;562,Fossil invertebrates;563,Miscellaneous fossil marine and seashore invertebrates;564,Fossil Mollusca and Molluscoidea;565,Fossil Arthropoda;566,Fossil Chordata;567,Fossil cold-blooded vertebrates;568,Fossil Aves (birds);569,Fossil Mammalia;570,Biology;571,Physiology and related subjects;572,Biochemistry;573,Specific physiological systems in animals, regional histology and physiology in animals;574,Not assigned or no longer used;575,Specific parts of and physiological systems in plants;576,Genetics and evolution;577,Ecology;578,Natural history of organisms and related subjects;579,Natural history of microorganisms, fungi, algae;580,Plants;581,Specific topics in natural history of plants;582,Plants noted for specific vegetative characteristics and flowers;583,Magnoliopsida (Dicotyledones);584,Liliopsida (Monocotyledones);585,Pinophyta (Gymnosperms);586,Cryptogamia (Seedless plants);587,Pteridophyta;588,Bryophyta;589,No longer used—formerly Forestry;590,Animals;591,Specific topics in natural history of animals;592,Invertebrates;593,Miscellaneous marine and seashore invertebrates;594,Mollusca and Molluscoidea;595,Arthropoda;596,Chordata;597,Cold-blooded vertebrates;598,Aves (Birds);599,Mammalia (Mammals);600,Technology (Applied sciences);601,Philosophy and theory;602,Miscellany;603,Dictionaries, encyclopedias, concordances;604,Technical drawing, hazardous materials technology; groups of people;605,Serial publications;606,Organizations;607,Education, research, related topics;608,Patents;609,History, geographic treatment, biography;610,Medicine and health;611,Human anatomy, cytology, histology;612,Human physiology;613,Personal health and safety;614,Forensic medicine; incidence of injuries, wounds, disease; public preventive medicine;615,Pharmacology and therapeutics;616,Diseases;617,Surgery, regional medicine, dentistry, ophthalmology, otology, audiology;618,Gynecology, obstetrics, pediatrics, geriatrics;619,No longer used—formerly Experimental medicine;620,Engineering and applied operations;621,Applied physics;622,Mining and related operations;623,Military and nautical engineering;624,Civil engineering;625,Engineering of railroads, roads;626,Not assigned or no longer used;627,Hydraulic engineering;628,Sanitary engineering;629,Other branches of engineering;630,Agriculture and related technologies;631,Specific techniques; apparatus, equipment, materials;632,Plant injuries, diseases, pests;633,Field and plantation crops;634,Orchards, fruits, forestry;635,Garden crops (Horticulture);636,Animal husbandry;637,Processing dairy and related products;638,Insect culture;639,Hunting, fishing, conservation, related technologies;640,Home and family management;641,Food and drink;642,Meals and table service;643,Housing and household equipment;644,Household utilities;645,Household furnishings;646,Sewing, clothing, management of personal and family life;647,Management of public households (Institutional housekeeping);648,Housekeeping;649,Child rearing; home care of people with disabilities and illnesses;650,Management and auxiliary services;651,Office services;652,Processes of written communication;653,Shorthand;654-656,Not assigned or no longer used;657,Accounting;658,General management;659,Advertising and public relations;660,Chemical engineering and related technologies;661,Technology of industrial chemicals;662,Technology of explosives, fuels, related products;663,Beverage technology;664,Food technology;665,Technology of industrial oils, fats, waxes, gases;666,Ceramic and allied technologies;667,Cleaning, color, coating, related technologies;668,Technology of other organic products;669,Metallurgy;670,Manufacturing;671,Metalworking processes and primary metal products;672,Iron, steel, other iron alloys;673,Nonferrous metals;674,Lumber processing, wood products, cork;675,Leather and fur processing;676,Pulp and paper technology;677,Textiles;678,Elastomers and elastomer products;679,Other products of specific kinds of materials;680,Manufacture of products for specific uses;681,Precision instruments and other devices;682,Small forge work (Blacksmithing);683,Hardware and household appliances;684,Furnishings and home workshops;685,Leather and fur goods, and related products;686,Printing and related activities;687,Clothing and accessories;688,Other final products, and packaging technology;689,Not assigned or no longer used;690,Construction of buildings;691,Building materials;692,Auxiliary construction practices;693,Construction in specific types of materials and for specific purposes;694,Wood construction;695,Roof covering;696,Utilities;697,Heating, ventilating, air-conditioning engineering;698,Detail finishing;699,Not assigned or no longer used;700,The Arts;701,Philosophy and theory of fine and decorative arts;702,Miscellany of fine and decorative arts;703,Dictionaries, encyclopedias, concordances of fine and decorative arts;704,Special topics in fine and decorative arts;705,Serial publications of fine and decorative arts;706,Organizations and management of fine and decorative arts;707,Education, research, related topics of fine and decorative arts;708,Galleries, museums, private collections of fine and decorative arts;709,History, geographic treatment, biography;710,Area planning and landscape architecture;711,Area planning (Civic art);712,Landscape architecture (Landscape design);713,Landscape architecture of trafficways;714,Water features in landscape architecture;715,Woody plants in landscape architecture;716,Herbaceous plants in landscape architecture;717,Structures in landscape architecture;718,Landscape design of cemeteries;719,Natural landscapes;720,Architecture;721,Architectural materials and structural elements;722,Architecture from earliest times to c. 300;723,Architecture from c. 300,to 1399;724,Architecture from 1400;725,Public structures;726,Buildings for religious and related purposes;727,Buildings for educational and research purposes;728,Residential and related buildings;729,Design and decoration of structures and accessories;730,Sculpture and related arts;731,Processes, forms, subjects of sculpture;732,Sculpture from earliest times to c. 500, sculpture of non-literate peoples;733,Greek, Etruscan, Roman sculpture;734,Sculpture from ca 500,to 1399;735,Sculpture from 1400;736,Carving and carvings;737,Numismatics and sigillography;738,Ceramic arts;739,Art metalwork;740,Graphic arts;741,Drawing and drawings;742,Perspective in drawing;743,Drawing and drawings by subject;744,Not assigned or no longer used;745,Decorative arts;746,Textile arts;747,Interior decoration;748,Glass;749,Furniture and accessories;750,Painting and paintings;751,Techniques, procedures, apparatus, equipment, materials, forms;752,Color;753,Symbolism, allegory, mythology, legend;754,Genre paintings;755,Religion;756,Not assigned or no longer used;757,Human figures;758,Nature, architectural subjects and cityscapes, other specific subjects;759,History, geographic treatment, biography;760,Printmaking and prints;761,Relief processes (Block printing);762,Not assigned or no longer used;763,Lithographic processes (Planographic processes);764,Chromolithography and serigraphy;765,Metal engraving;766,Mezzotinting, aquatinting, and related processes;767,Etching and drypoint;768,Not assigned or no longer used;769,Prints;770,Photography, computer art, cinematography, videography;771,Techniques, procedures, apparatus, equipment, materials;772,Metallic salt processes;773,Pigment processes of printing;774,No longer used—formerly Holography;775,No longer used—formerly Digital photography;776,Computer art (Digital art);777,Cinematography and Videography;778,Specific fields and special kinds of photography;779,Photographic images;780,Music;781,General principles and musical forms;782,Vocal music;783,Music for single voices;784,Instruments and Instrumental ensembles and their music;785,Ensembles with only one instrument per part;786,Keyboard, mechanical, electrophonic, percussion instruments;787,Stringed instruments (Chordophones);788,Wind instruments (Aerophones);789,Not assigned or no longer used;790,Recreational and performing arts;791,Public performances;792,Stage presentations;793,Indoor games and amusements;794,Indoor games of skill;795,Games of chance;796,Athletic and outdoor sports and games;797,Aquatic and air sports;798,Equestrian sports and animal racing;799,Fishing, hunting, shooting;800,Literature (Belles-lettres) and rhetoric;801,Philosophy and theory;802,Miscellany;803,Dictionaries, encyclopedias, concordances;804,Not assigned or no longer used;805,Serial publications;806,Organizations and management;807,Education, research, related topics;808,Rhetoric and collections of literary texts from more than two literatures;809,History, description, critical appraisal of more than two literatures;810,American literature in English;811,American poetry in English;812,American drama in English;813,American fiction in English;814,American essays in English;815,American speeches in English;816,American letters in English;817,American humor and satire in English;818,American miscellaneous writings in English;819,No longer used—formerly Puzzle activities;820,English and Old English (Anglo-Saxon) literatures;821,English Poetry;822,English drama;823,English fiction;824,English essays;825,English speeches;826,English letters;827,English humor and satire;828,English miscellaneous writings;829,Old English (Anglo-Saxon) literature;830,German literature and literatures of related languages;831,German poetry;832,German drama;833,German fiction;834,German essays;835,German speeches;836,German letters;837,German humor and satire;838,German miscellaneous writings;839,Other Germanic literatures;840,French literature and literatures of related Romance languages;841,French poetry;842,French drama;843,French fiction;844,French essays;845,French speeches;846,French letters;847,French humor and satire;848,French miscellaneous writings;849,Occitan, Catalan, Franco-Provençal literatures;850,Literatures of Italian, Dalmatian, Romanian, Rhaetian, Sardinian, Corsican languages;851,Italian poetry;852,Italian drama;853,Italian fiction;854,Italian essays;855,Italian speeches;856,Italian letters;857,Italian humor and satire;858,Italian miscellaneous writings;859,Literatures of Romanian, Rhaetian, Sardinian, Corsican languages;860,Literatures of Spanish, Portuguese, Galician languages;861,Spanish poetry;862,Spanish drama;863,Spanish fiction;864,Spanish essays;865,Spanish speeches;866,Spanish letters;867,Spanish humor and satire;868,Spanish miscellaneous writings;869,Literatures of Portuguese and Galician languages;870,Latin literature and literatures of related Italic languages;871,Latin poetry;872,Latin dramatic poetry and drama;873,Latin epic poetry and fiction;874,Latin lyric poetry;875,Latin speeches;876,Latin letters;877,Latin humor and satire;878,Latin miscellaneous writings;879,Literatures of other Italic languages;880,Classical Greek literature and literatures of related Hellenic languages;881,Classical Greek poetry;882,Classical Greek drama;883,Classical Greek epic poetry and fiction;884,Classical Greek lyric poetry;885,Classical Greek speeches;886,Classical Greek letters;887,Classical Greek humor and satire;888,Classical Greek miscellaneous writings;889,Modern Greek literature;890,Literatures of other specific languages and language families;891,East Indo-European and Celtic literatures;892,Afro-Asiatic literatures;893,Non-Semitic Afro-Asiatic literatures;894,Literatures of Altaic, Uralic, Hyperborean, Dravidian languages; literatures of miscellaneous languages of South Asia;895,Literatures of East and Southeast Asia;896,African literatures;897,Literatures of North American native languages;898,Literatures of South American native languages;899,Literatures of non-Austronesian languages of Oceania, of Austronesian languages, of miscellaneous languages;900,History, geography, and auxiliary disciplines;901,Philosophy and theory of history;902,Miscellany of history;903,Dictionaries, encyclopedias, concordances of history;904,Collected accounts of events;905,Serial publications of history;906,Organizations and management of history;907,Education, research, related topics of history;908,History with respect to groups of people;909,World history;910,Geography and travel;911,Historical geography;912,Graphic representations of surface of earth and of extraterrestrial worlds;913,Geography of and travel in the ancient world;914,Geography of and travel in Europe;915,Geography of and travel in Asia;916,Geography of and travel in Africa;917,Geography of and travel in North America;918,Geography of and travel in South America;919,Geography of and travel in Australasia, Pacific Ocean islands, Atlantic Ocean islands, Arctic islands, Antarctica, and on extraterrestrial worlds;920,Biography, genealogy, insignia;921-928,This range is reserved as an optional location for biographies, which are shelved alphabetically by subject's last name.;929,Genealogy, names, insignia;930,History of ancient world to c. 499;931,China to 420;932,Egypt to 640;933,Palestine to 70;934,South Asia to 647;935,Mesopotamia to 637,and Iranian Plateau to 637;936,Europe north and west of Italian Peninsula to c. 499;937,Italian Peninsula to 476,and adjacent territories to 476;938,Greece to 323;939,Other parts of ancient world;940,History of Europe;941,British Isles;942,England and Wales;943,Germany and neighboring central European countries;944,France and Monaco;945,Italy, San Marino, Vatican City, Malta;946,Spain, Andorra, Gibraltar, Portugal;947,Russia and neighboring east European countries;948,Scandinavia;949,Other parts of Europe;950,History of Asia;951,China and adjacent areas;952,Japan;953,Arabian Peninsula and adjacent areas;954,India and neighboring south Asian countries;;955,Iran;956,Middle East (Near East);957,Siberia (Asiatic Russia);958,Central Asia;959,Southeast Asia;960,History of Africa;961,Tunisia and Libya;962,Egypt, Sudan, South Sudan;963,Ethiopia and Eritrea;964,Morocco, Ceuta, Melilla Western Sahara, Canary Islands;965,Algeria;966,West Africa and offshore islands;967,Central Africa and offshore islands;968,Republic of South Africa and neighboring southern African countries;969,South Indian Ocean islands;970,History of North America;971,Canada;972,Mexico, Central America, West Indies, Bermuda;973,United States;974,Northeastern United States (New England and Middle Atlantic states);975,Southeastern United States (South Atlantic states);976,South central United States;977,North central United States;978,Western United States;979,Great Basin and Pacific Slope region of United States;980,History of South America;981,Brazil;982,Argentina;983,Chile;984,Bolivia;985,Peru;986,Colombia and Ecuador;987,Venezuela;988,Guiana;989,Paraguay and Uruguay;990,History of Australasia, Pacific Ocean islands, Atlantic Ocean islands, Arctic islands, Antarctica, extraterrestrial worlds;991-992,Not assigned or no longer used;993,New Zealand;994,Australia;995,New Guinea and neighboring countries of Melanesia;996,Polynesia and other Pacific Ocean islands;997,Atlantic Ocean islands;998,Arctic islands and Antarctica;999,Extraterrestrial worlds;`.split(";");

window.isMobileBrowser = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function onReadyDesktop() {
  if (window.isMobileBrowser()) {
    window.location.href = "mobile.html";
  }
}

// define a function to search numbers
function search() {

  // grab the search term through DOM access
  var searchTerm = document.getElementById("searchBox").value;

  // declare the table contents and add the table headers
  var tableContents = `<br /><br />
  <tr>
      <th>Number</th>
      <th>Classification</th>
    </tr>`;

  // if the search is empty, destroy the table and stop considering
  if (searchTerm.length == 0) {
    document.getElementById("resultsTable").innerHTML = "";
    document.getElementById("resultCount").innerHTML = "";
    return;
  }

  // special character for all records
  if (searchTerm == "*") {

    // create an empty records table
    var records = [];

    // push all data to the records array, formatting as it goes
    for (var i = 0; i < hundreds.length; i++) {
      resultCounter++;
      records.push(`<tr>
              <td>${hundreds[i].substring(0,3)}-${hundreds[i].substring(0,1)}99</td>
              <td>${hundreds[i].substring(8, hundreds[i].length)}</td>
            </tr>`);
    }
    for (var j = 0; j < tens.length; j++) {
      resultCounter++;
      records.push(`<tr>
                    <td>${tens[j].substring(0,3)}-${tens[j].substring(0,2)}9</td>
                    <td>${tens[j].substring(8, tens[j].length)}</td>
                  </tr>`);
    }
    for (var k = 0; k < ones.length; k++) {
      resultCounter++;
      records.push(`<tr>
                          <td>${ones[k].substring(0,3)}</td>
                          <td>${ones[k].substring(4, ones[k].length)}</td>
                        </tr>`);
    }

    // sort the records table and format it as a string
    records.sort()
    records.forEach(function(item, index) {
      tableContents += item;
    });

    // output
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = `${resultCounter} matching results.`;
    return;
  }

  // special phrase for breakdown
  if (searchTerm.toLowerCase() == "getbreakdown") {
    let c = prompt("Classification Breakdown: Enter Classification...", "");
    if (c.length != 3) {
      alert("Error: Length of input must be exactly 3.");
    } else if (isNaN(c)) {
      alert("Error: Input must be a valid number.");
    } else {
      alert(getClassificationBreakdown(c));
    }

    document.getElementById("searchBox").value = "";
    return;


  }

  // if is number, but is too specific, show error messages
  if ((!(isNaN(searchTerm))) && searchTerm < 0) {
    tableContents = "<h3>❓ Invalid Query ❓</h3><br />It looks like you've searched for a number lower than 0. Please try searching for a word, phrase, or any number from 0-999.</h3>";
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = "";
    return;
  } else if ((!(isNaN(searchTerm))) && searchTerm >= 1000) {
    tableContents = "<h3>❓ Invalid Query ❓</h3><br />It looks like you've searched for a number greater than or equal to 1000. ˙. Please try searching for a word, phrase, or any number from 0-999.</h3>";
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = "";
  } else if ((!(isNaN(searchTerm))) && searchTerm.length > 3) {
    tableContents = "<h3>⚠️ Too specific!⚠️</h3><br />More specific searches coming soon...</h3>";
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = "";
    return;
  }

  // if NaN, search via text; otherwise, search via number
  if (isNaN(searchTerm)) {

    var recordsStartingWith = [];
    var recordsContaining = [];
    for (var k = 0; k < ones.length; k++) {
      if (ones[k].toLowerCase().substring(4, ones[k].length).startsWith(searchTerm.toLowerCase())) {
        // if startsWith, push to the startsWith list
        recordsStartingWith.push(`<tr>
            <td>${ones[k].substring(0,3)}</td>
            <td>${ones[k].substring(4, ones[k].length)}</td>
          </tr>`);
      } else if (ones[k].toLowerCase().includes(searchTerm.toLowerCase())) {
        // if not startsWith, but does include, push to containing list
        recordsContaining.push(`<tr>
            <td>${ones[k].substring(0,3)}</td>
            <td>${ones[k].substring(4, ones[k].length)}</td>
          </tr>`);
      }
    }

    // @TODO: Should these records be sorted alphabetically before display,
    // or is it better to keep them in numerical order?  

    // combine the arrays without sorting such that startsWith comes first
    var records = recordsStartingWith.concat(recordsContaining);

    // format into a string
    records.forEach(function(item, index) {
      tableContents += item;
    });

    // if no results, show error message
    if (records.length == 0) {
      tableContents = "<h3>🔎 No Results Found 🔍</h3><br />Your search didn't match any results.</h3>";
      document.getElementById("resultsTable").innerHTML = tableContents;
      document.getElementById("resultCount").innerHTML = "";
      return;
    }

    // otherwise, display results
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = `${records.length} matching results.`;

  } else {
    // search through the data and catalog any matching records
    var r1 = [];
    for (var i = 0; i < hundreds.length; i++) {
      if (hundreds[i].startsWith(searchTerm)) {
        r1.push(`<tr>
              <td>${hundreds[i].substring(0,3)}-${hundreds[i].substring(0,1)}99</td>
              <td>${hundreds[i].substring(8, hundreds[i].length)}</td>
            </tr>`);
      }

    }
    var r2 = [];
    for (var j = 0; j < tens.length; j++) {
      if (tens[j].startsWith(searchTerm)) {
        r2.push(`<tr>
                <td>${tens[j].substring(0,3)}-${tens[j].substring(0,2)}9</td>
                <td>${tens[j].substring(8, tens[j].length)}</td>
              </tr>`);
      }

    }
    var r3 = [];
    for (var k = 0; k < ones.length; k++) {
      if (ones[k].startsWith(searchTerm)) {
        r3.push(`<tr>
                    <td>${ones[k].substring(0,3)}</td>
                    <td>${ones[k].substring(4, ones[k].length)}</td>
                  </tr>`);
      }

    }

    // sort the arrays
    r1.sort();
    r2.sort();
    r3.sort();

    // concatonate these sorted arrays into records
    var records = r1.concat(r2, r3);

    // change this record array into a string
    records.forEach(function(item, index) {
      tableContents += item;
    });
    document.getElementById("resultsTable").innerHTML = tableContents;
    document.getElementById("resultCount").innerHTML = `${records.length} matching results.`;

  }

}





function getRandFromArr(list) {
  return list[Math.floor(Math.random() * list.length)];
}



function showTip() {
  alert(
    getRandFromArr(
      [
        "Search '*' to see all individual classifications.",
        "You can search via number or summary!",
        "Mobile device support is coming soon!",
        "Our UI was inspired by Google and iOS!"
      ]
    )
  );
}

function getClassificationBreakdown(x) {

  var fullClassificationNumber = x.toString();

  var breakdown = "";

  for (var i = 0; i < hundreds.length; i++) {
    if (hundreds[i].startsWith(fullClassificationNumber.substring(0, 1))) {
      breakdown += hundreds[i] + " > ";
    }
  }

  for (var i = 0; i < tens.length; i++) {
    if (tens[i].startsWith(fullClassificationNumber.substring(0, 2))) {
      breakdown += tens[i] + " > ";
    }
  }

  for (var i = 0; i < ones.length; i++) {
    if (ones[i].startsWith(fullClassificationNumber.substring(0, 3))) {
      breakdown += ones[i];
    }
  }



  return breakdown;
}
