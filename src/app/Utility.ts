
export class Utility {

  public formatDbData(data): string {

    let format = '';

    data.forEach(item => {
      format += 'Student Name =>  ' + (item['name'] || []) +
        ',Father Name =>  ' + (item['fname'] || []) +
        ',Class =>  ' + (item['class'] || []) +
        ',Cell # =>  ' + (item['phone'] || []) + ' \n';
    });

    return format;
  }

  public preDataLoadStatement() {
    return `(
        'Abdul Basit', 'AbdulHameed  ', '10', '03239922351', 0
      ),



          (
            'Abuzar', 'M.Nadeem  ', '10', '03219009869', 0
          ),



          (
            'Afzaal Ahmad', 'IftikharAhmad  ', '10', '03349201023', 0
          ),



          (
            'Basit Ahmad', 'SaidMuhammad  ', '10', '03150181975', 0
          ),



          (
            'Faisal Inayat', 'InayatAliKhan  ', '10', '03339277143', 0
          ),



          (
            'Gulsher', 'M.Usman  ', '10', '03329459922', 0
          ),



          (
            'Hammad Khan', 'MominKhan  ', '10', '03076517789', 0
          ),



          (
            'Hammad Momin', 'MominKhan  ', '10', '03109772664', 0
          ),



          (
            'Hamza Khan', 'RashidKhan  ', '10', '03219103691', 0
          ),



          (
            'Hassan Raza', 'GulbarKhan  ', '10', '03355780177', 0
          ),



          (
            'Ijaz Sajawal', 'SajawalKhan  ', '10', '03015930119', 0
          ),



          (
            'Janas Khan', 'Jahangeer  ', '10', '03219016415', 0
          ),



          (
            'Kashif Qayuum', 'AbdulQayyum  ', '10', '03015951972', 0
          ),



          (
            'Khalid Usman', 'GulBadshah ', '10', '03324900005', 0
          ),



          (
            'Khwaja Hassan', 'UmarMuhammad  ', '10', '03329179405', 0
          ),



          (
            'M. Amir Khan', 'KiramatUllah  ', '10', '03229184632', 0
          ),



          (
            'M. Faraz', 'Fiaz-ur-Rehman   ', '10', '03469684755', 0
          ),



          (
            'M. Jibran', 'AbdulSattar  ', '10', '03139652825', 0
          ),



          (
            'M. Shahzaib', 'AbdulSitar  ', '10', '03119994626', 0
          ),



          (
            'M. Sohail', 'SalmanKhan  ', '10', '03339193680', 0
          ),



          (
            'M. Umair', 'Israeel  ', '10', '03171449863', 0
          ),



          (
            'M. Waqas', 'Khialay  ', '10', '03005936058', 0
          ),



          (
            'M.Mehran', 'ImranKhan  ', '10', '03025515550', 0
          ),



          (
            'M.Nouman', 'Mushtaq  ', '10', '03465291299', 0
          ),



          (
            'M.Roman', 'Alamzeb  ', '10', '03459710899', 0
          ),



          (
            'Mati Ur Rehman Class X 2021 Batch', '', '10', '+923335213473', 0
          ),



          (
            'Muti Ur Rehman', 'TawakalKhan  ', '10', '03339194769', 0
          ),



          (
            'Salman Khan', 'Zahidullah  ', '10', '03335898103', 0
          ),



          (
            'Salman', 'Bakhtiar  ', '10', '03005840977', 0
          ),



          (
            'SanaUllah', 'Minhaj  ', '10', '03151121616', 0
          ),



          (
            'Shahzeb', 'KamilShah  ', '10', '03349102585', 0
          ),



          (
            'Suliman', 'Firdoskhan  ', '10', '03495162738', 0
          ),



          (
            'Taj Pef', '', '10', '03340095124', 0
          ),



          (
            'bacha khan', '', '7',' 3339501405', 0
          ),



          (
            'omar Farooq', 'abdul majeed', '8', '03499370040', 0
          ),



          (
            'Tahir ullah', 'Zakir khan', '8','3459111547', 0
          ),



          (
            'salman', 'musafir khan', '8','3135352736', 0
          ),



          (
            'Muhammad Arif', 'Haris khan', '8','3146911145', 0
          ),



          (
            'Shahid', 'Akhtar zia', '8','3159477326', 0
          ),



          (
            'Asad Ullah', 'Pervaiz', '8','3369192279', 0
          ),



          (
            'Muhib noor', 'Noras jahan', '8', '03459022994', 0
          ),



          (
            'M Shayan', 'Khaista rehman', '8', '03359181548', 0
          ),



          (
            'M farhan', 'Hashim', '8', '03045248574', 0
          ),



          (
            'Zia ullah', 'Zain ullah', '8', '03329105497', 0
          ),



          (
            'Walid', 'Rab nawaz', '8', '03449170562', 0
          ),



          (
            'M ali', 'Yousaf ali', '8', '03339934354', 0
          ),



          (
            'M ismael', 'Aziz ur rehman', '8', '03202945150', 0
          ),



          (
            'Anas khalil', 'Ayub', '8', '03459428099', 0
          ),



          (
            'Anthony', 'Aijaz', '8', '03469008071', 0
          ),



          (
            'Omar', 'jehanzaib', '8', '03150732683', 0
          ),



          (
            'Ubaid', 'omar gull', '8', '03130995049', 0
          ),



          (
            'Faraz', 'abdul jalil', '8', '03209911474', 0
          ),



          (
            'Zeeshan', 'danyal', '8', '03025319289', 0
          ),



          (
            'Farhan', 'fared ullah', '8', '03339116395', 0
          ),



          (
            'Abdul basit', 'shahid israr', '8', '03025788778', 0
          ),



          (
            'M sami', 'shokat', '8', '03005858578', 0
          ),



          (
            'Hashim', 'wasim', '8', '03479443004', 0
          ),



          (
            'Shah', 'furqan', '8', '03411384747', 0
          ),



          (
            'Adnan', 'mukhtiar', '8', '03149136186', 0
          ),



          (
            'Shahzaib', 'mukhtiar', '8', '03149136156', 0
          ),



          (
            'M musawir', 'omar', '8', '03449292406', 0
          ),



          (
            'M haris', 'nawaz', '8', '03219130434', 0
          ),



          (
            'Rowaid', 'M zahid shah', '8', '03078357849', 0
          ),



          (
            'Zohaib', 'Zain ullah', '8', '03159711730', 0
          ),



          (
            'Yousaf khan', 'Jehangir', '8','3005908150', 0
          ),



          (
            'M ubaid', 'sajid mehmood', '7', '03169864822', 0
          ),



          (
            'Ali khan', 'fiaz khan', '7', '03469156268', 0
          ),



          (
            'Abdul moiz', 'nadir khan', '7', '03358280061', 0
          ),



          (
            'Hamza', 'm ismael', '7', '03229076173', 0
          ),



          (
            'Rehan', 'zulfiqar khan', '7', '03219018321', 0
          ),



          (
            'Abdullah1', 'habib gull', '7', '03339777309', 0
          ),



          (
            'Abdullah2', 'nizam ullah', '7', '03219745346', 0
          ),



          (
            'Ibrahim', 'rahman gull', '7', '03109551164', 0
          ),



          (
            'M waqas', 'Khaista Rehman', '7', '03339181548', 0
          ),



          (
            'Afaq khan', 'Rahat shah', '7', '03005997844', 0
          ),



          (
            'Abdullah3', 'jahangir khan', '7', '03219708035', 0
          ),



          (
            'M umar', 'zahid khan', '7', '03489156766', 0
          ),



          (
            'M awais', 'fazle akbar', '7', '03160958807', 0
          ),



          (
            'M jawad', 'Gul zaman', '7', '03125924288', 0
          ),



          (
            'M rehan', 'M tahir taj', '7', '03009595992', 0
          ),



          (
            'M shoaib ullah', 'zaibln ullah', '7', '03159711730', 0
          ),



          (
            'M masood', 'zahid ur rehman', '7', '03325044604', 0
          ),



          (
            'Hussain ahmad', 'daryafat khan', '7', '03465644149', 0
          ),



          (
            'Hasnain Ali', 'zulfiqar ali', '7', '03322007155', 0
          ),



          (
            'M zimad', 'sher mohamad', '7', '03209027852', 0
          ),



          (
            'M sahil', 'Ikhtiar mohammad', '7', '03469114936', 0
          ),



          (
            'Amir khan', 'Abdul manan', '7', '03377109003', 0
          ),



          (
            'Shayan', 'abdussatar', '7', '03119994624', 0
          ),



          (
            'Shah fahad', 'bashir khan', '7', '03038389867', 0
          ),



          (
            'Shayan', 'nazir ahmad', '7', '03369180855', 0
          ),



          (
            'M anas', 'm zahid', '7', '03459150899', 0
          ),



          (
            'Idrees khan', 'naznin khan', '7', '03369642377', 0
          ),



          (
            'M azran', 'imran', '7', '03452281823', 0
          ),



          (
            'Dawood', 'Daniel', '7', '03449131168', 0
          ),



          (
            'Abdul basit', 'meer ahmad', '7', '03339242225', 0
          ),



          (
            'M salman', 'wali rehman', '7', '03368077053', 0
          ),



          (
            'Hammad khan', 'tariq hussein', '7', '03329503012', 0
          ),



          (
            'Junaid khan', 'mehraban shah', '7', '03359171401', 0
          ),



          (
            'Umar Ali', 'abdul halim', '7', '03149239277', 0
          ),







          (
            'Habib', 'Mujahid', '7', '03461806568', 0
          ),



          (
            'Furqan', 'Gul khan', '7', '03409532658', 0
          ),



          (
            'Ibrahim', 'M arshad', '7', '03429184708', 0
          ),



          (
            'M zubair', 'sher azam', '7', '03409326650', 0
          ),



          (
            'Hamza maqsood', 'maqsood afzal', '7', '03219756929', 0
          ),



          (
            'Mansoor', 'momin', '7', '03410991216', 0
          ),



          (
            'Haris khan', 'arif khan', '7', '03339371390', 0
          ),



          (
            'Ayan mohd', 'khan mohd', '7', '03469151811', 0
          ),



          (
            'Adil khan', 'Sorat khan', '7', '03022156310', 0
          ),



          (
            'M suhaib', 'ghulam nabi', '7', '03219125909', 0
          ),



          (
            'Sahil shehzad', 'shehzad', '7', '03201915528', 0
          ),



          (
            'Sheharyar', 'Tajal hussein', '7', '03333068411', 0
          ),



          (
            'Wajid Ufone Paf', '', '6', '03349047624', 0
          ),



          (
            'Abdul Haseeb', 'Nadeem', '6', '03219009869', 0
          ),



          (
            'Zubair masih', 'Nasir masih', '6', '03440550092', 0
          ),



          (
            'Rayyan masood', 'Masood afzal', '6', '03009395198', 0
          ),



          (
            'Muzamil', 'Jehangir', '6', '03219016415', 0
          ),



          (
            'Noman', 'Zeeshan', '6', 03428587007 , 0
          ),



          (
            'Abbas', 'Malang shah', '6', '03166399165', 0
          ),



          (
            'Faheem', 'Azeem', '6', 03202845150 , 0
          ),



          (
            'Umar ali', 'Yousaf ali', '6', '03339934354', 0
          ),



          (
            'Shahmeer', 'Asif masih', '6', '03159113781', 0
          ),



          (
            'Ishaq', 'Momin', '6', '03410991216', 0
          ),



          (
            'Fahad', 'Khista rehman', '6', '03349076106', 0
          ),



          (
            'Nizam', 'Naveed khan', '6', '03349769338', 0
          ),



          (
            'Daud firdous', 'Firdous', '6', '03179571753', 0
          ),



          (
            'Uzair', 'Rehmat khan', '6', '03085352230', 0
          ),



          (
            'Hasnain', 'Israr', '6', '03339266552', 0
          ),



          (
            'Sajjad', 'Gul zaman', '6', '03125924288', 0
          ),



          (
            'Haseeb', 'Zia ur rehman', '6', '03212480077', 0
          ),



          (
            'Wasi', 'Zain ullah', '6', '03329105497', 0
          ),



          (
            'Mujtaba', 'Laiq ahmad', '6', '03469377200', 0
          ),



          (
            'Umair', 'Rahat shah', '6', '03005997844', 0
          ),



          (
            'Asad', 'Malang jan', '6', '03005933228', 0
          ),



          (
            'Abass gull', 'Gul badshah', '6', '03324900005', 0
          ),



          (
            'Shah fahad', 'M younas', '6', '03154414406', 0
          ),



          (
            'Asim khan', 'Sanober', '6', '03005874298', 0
          ),



          (
            'Ahmad', 'Shahid murad', '6', '03102775132', 0
          ),



          (
            'Hashir', 'Farid ullah', '6', '03339116395', 0
          ),



          (
            'Ubaid ullah', 'munawar', '6', '03150956202', 0
          ),



          (
            'Muzamil', 'Jehangir', '6', '03169091600', 0
          ),



          (
            'Sohaib', 'M sohail', '6', '03119491278', 0
          ),



          (
            'Abubaker', 'Khalil', '6', '03005957278', 0
          ),



          (
            'Huzaifa', 'M rafiq', '6', '03369171276', 0
          ),



          (
            'Mohadis', 'Sareed khan', '6', '03469898123', 0
          ),



          (
            'Kamran', 'Gul khan', '6', '03139160644', 0
          ),



          (
            'Ubaid ullah', 'Azam khan', '6', '03118850459', 0
          ),



          (
            'Jawad javed', 'Javed khan', '6', '03149614252', 0
          ),



          (
            'M Farooq', 'Nihar', '6', '03479077537', 0
          ),



          (
            'Saad', 'Sakhawat shah', '6', '03319666422', 0
          ),



          (
            'M Hammad', 'Minhaj gull', '6', '03151121616', 0
          ),



          (
            'Sudais', 'Noor Rehman', '6', '03339235129', 0
          ),



          (
            'M salman', 'Shahid Kareem', '10', '03339111278', 0
          ),



          (
            'Rohail nadeem', 'Sohail Nadeem', '10', '03439810050', 0
          ),



          (
            'Husnain', 'M usman', '10', '03480488674', 0
          ),



          (
            'Hazrat umar', 'M kareem', '10', '03439239597', 0
          ),



          (
            'Shahabuddin', 'Faqir hussein', '10', '03349124612', 0
          ),



          (
            'Abdul majid', 'Abdulbasit', '10', 03339364536 , 0
          ),



          (
            'M Ali', 'Wali Muhamad', '10', '03239900240', 0
          ),



          (
            'M shoaib', 'Sarwar khan', '10', '03090212757', 0
          ),



          (
            'Rizwan maseh', 'danyal maseh', '10', '03025319289', 0
          ),



          (
            'M mubeen', 'M Ayub', '10', '03159457940', 0
          ),



          (
            'Kashif ullah', 'Pervez khan', '10', '03189603459', 0
          ),



          (
            'Hasib ullah', 'Habib ullah', '10', '03484705403', 0
          ),



          (
            'Afzal khan', 'Rashid khan', '10', '03219103691', 0
          ),



          (
            'M sami ullah', 'Imam baksh', '10', '03465856561', 0
          ),



          (
            'Ahmad zeb', 'Kamil shah', '10', '03349102585', 0
          ),



          (
            'Stifness', 'welson', '10', '03079267832', 0
          ),



          (
            'Saif ullah', 'Minhaj hussein', '10', '03151121616', 0
          ),



          (
            'Burhan uddin', 'Salah uddin', '10', '03139096272', 0
          ),



          (
            'Khizar hussein', 'Israr hussein', '10', '03209009556', 0
          ),



          (
            'SubhanUllah', 'Sabir khan', '10', '03459049770', 0
          ),



          (
            'Salman', 'Gul khan', '10', '03351504423', 0
          ),



          (
            'Talha zeb', 'saran zeb', '10', '03109680975', 0
          ),



          (
            'Israr ahmad', 'Abdul ghaffar', '10', '03184964595', 0
          ),



          (
            'Abdullah', 'M idrees khan', '10', '03469032709', 0
          ),



          (
            'Saif ullah', 'Ikram khan', '10', '03139858951', 0
          ),



          (
            'Mosa rasheed', 'Ziarat gull', '10', '03129595545', 0
          ),



          (
            'Hamza khan', 'Khalid khan', '10', '03459068844', 0
          ),



          (
            'Aziz ullah', 'Fazal Molla', '10', '03169694949', 0
          ),



          (
            'Hazrat Ali', 'Janas khan', '10', '03469141724', 0
          ),



          (
            'M Hamza', 'Niaz Ali', '10', '03146911145', 0
          ),



          (
            'Hamza khan', 'Kachkol', '10', '03209394479', 0
          ),



          (
            'M afaq', 'Bakhtiar Alam', '10', '03119448909', 0
          ),



          (
            'M Salman', 'Shakil khan', '10', '03139594457', 0
          ),



          (
            'Munir khan', 'Tariq khan', '10', '03030283685', 0
          ),



          (
            'Ikram ullah', 'M Gull', '10', '03201943119', 0
          ),



          (
            'Owais rehman', 'Noor rehman', '10', '03445389690', 0
          ),



          (
            'M jawad', 'Tariq hussein', '10', '03179831412', 0
          ),



          (
            'Fakhar abbas', 'Safdar abbas', '10', '03201914797', 0
          ),



          (
            'Umair ahmad', 'Mukhtar ahmad', '10', '03078345115', 0
          ),



          (
            'Hamza', '', '8', '03339138406', 0
          ),



          (
            'Shaoib', '', '8', '03189620518', 0
          ),



          (
            'Abbas', '', '8', '03189041396', 0
          )
    `;
  }
}
