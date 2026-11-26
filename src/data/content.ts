export interface FullExhibitionChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: {
    id: string;
    subNumber?: string;
    subTitle: string;
    paragraphs: string[];
    archivalQuote?: {
      quote: string;
      source: string;
    };
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export const fullExhibitionContent: FullExhibitionChapter[] = [
  {
    id: 'chap-1-overview',
    number: '01',
    title: 'Giới thiệu và Nhận diện Hiện vật',
    subtitle: 'Công trình phòng tránh bom đạn quen thuộc của quân và dân Việt Nam',
    summary: 'Hầm trú ẩn chữ A là công trình phòng tránh bom đạn mang hình dáng mặt cắt hình chữ A, gắn liền với cuộc kháng chiến chống Mỹ và công tác phòng không nhân dân.',
    sections: [
      {
        id: 'sec-1-1',
        subTitle: 'Định danh và Bối cảnh Xuất hiện',
        paragraphs: [
          'Hầm trú ẩn chữ A là một loại công trình phòng tránh bom đạn được sử dụng phổ biến trong cuộc kháng chiến chống Mỹ, cứu nước, đặc biệt tại miền Bắc Việt Nam trong giai đoạn chiến tranh phá hoại bằng không quân và hải quân của Mỹ. Với đặc trưng kết cấu có hình dáng tương tự chữ A, loại hầm này trở thành một bộ phận quen thuộc trong hệ thống phòng không nhân dân, được bố trí tại khu dân cư, trường học, bệnh viện, cơ quan, nhà máy và nhiều địa điểm sinh hoạt, lao động khác.',
          'Tên gọi hầm chữ A xuất phát từ hình dạng mặt cắt ngang của công trình, với phần khung phía trên tạo thành hai mái nghiêng gặp nhau ở đỉnh. Trong các tài liệu, loại hầm này còn được gọi là hầm kèo hoặc hầm Triều Tiên. Hầm có thể được bố trí chìm một phần hoặc kết hợp với mặt đất, sử dụng những vật liệu sẵn có trong điều kiện chiến tranh và được điều chỉnh theo hoàn cảnh từng địa phương.',
          'Khác với những công trình ngầm quy mô lớn hay hệ thống địa đạo, hầm chữ A chủ yếu phục vụ nhu cầu trú ẩn của người dân và lực lượng quân sự trong những tình huống bị đánh phá. Giá trị của loại công trình này nằm ở khả năng tổ chức nơi trú ẩn tại những địa điểm gắn trực tiếp với đời sống thường nhật, giúp con người có nơi tránh nguy hiểm mà không phải hoàn toàn ngừng các hoạt động sinh hoạt, học tập và lao động.',
          'Trong lịch sử quốc phòng Việt Nam, hầm chữ A không chỉ là một giải pháp phòng tránh bom đạn mà còn phản ánh sự phát triển của công tác phòng không nhân dân – một hoạt động có sự tham gia rộng rãi của quân đội, chính quyền và nhân dân. Hình ảnh những căn hầm nhỏ bên đường làng, trong sân trường hay cạnh nơi làm việc đã trở thành một phần ký ức đặc trưng của xã hội Việt Nam trong thời chiến.'
        ],
        tableData: {
          headers: ['Hạng mục', 'Thông tin xác minh'],
          rows: [
            ['Tên hiện vật', 'Hầm trú ẩn chữ A'],
            ['Tên gọi khác', 'Hầm kèo, hầm Triều Tiên'],
            ['Phân loại', 'Công trình phòng tránh bom đạn'],
            ['Bối cảnh sử dụng nổi bật', 'Kháng chiến chống Mỹ, cứu nước'],
            ['Thời kỳ phổ biến tại Việt Nam', 'Từ giữa thập niên 1960'],
            ['Hình dạng đặc trưng', 'Mặt cắt hình tam giác, khung dạng chữ A'],
            ['Vật liệu lịch sử', 'Tre, gỗ, sắt và một số cấu kiện bê tông đúc sẵn'],
            ['Đối tượng sử dụng', 'Nhân dân, cán bộ, học sinh và lực lượng quân sự'],
            ['Mục đích chính', 'Tạo nơi trú ẩn trong các đợt không kích, pháo kích']
          ]
        }
      }
    ]
  },
  {
    id: 'chap-2-origin',
    number: '02',
    title: 'Nguồn gốc và Hành trình Phát triển',
    subtitle: 'Từ kinh nghiệm chiến trường Triều Tiên đến thế trận lòng dân miền Bắc',
    summary: 'Hành trình tiếp nhận kinh nghiệm quốc tế, vận dụng sáng tạo tại Khu IV đầu năm 1965 và trở thành phong trào toàn dân sau Chỉ thị 144-CT/TW năm 1967.',
    sections: [
      {
        id: 'sec-2-1',
        subNumber: '2.1',
        subTitle: 'Nguồn gốc của loại hầm chữ A',
        paragraphs: [
          'Hầm chữ A, còn được gọi là hầm Triều Tiên trong một số tài liệu lịch sử Việt Nam, có nguồn gốc gắn với kinh nghiệm xây dựng công trình trú ẩn của Quân đội Nhân dân Triều Tiên trong chiến tranh Triều Tiên giai đoạn 1950–1953. Đây là thời kỳ chiến tranh trên bán đảo Triều Tiên diễn ra ác liệt, với hoạt động không kích và pháo kích gây ra những tổn thất lớn cho lực lượng quân sự cũng như dân thường. Nhu cầu bảo vệ con người trước các cuộc tập kích từ trên không thúc đẩy việc phát triển những dạng công trình trú ẩn phù hợp với điều kiện chiến trường.',
          'Theo mục từ Hầm chữ A của Bách khoa Toàn thư Việt Nam và tư liệu nghiên cứu về Căn cứ Quân ủy, Bộ Chỉ huy Miền, loại hầm này được biết đến như một sáng kiến có liên hệ với kinh nghiệm quân sự Triều Tiên, sau đó được Việt Nam tiếp nhận và điều chỉnh để phù hợp với điều kiện trong nước. Tên gọi hầm Triều Tiên vì vậy được sử dụng song song với tên gọi hầm chữ A trong một số tài liệu và ký ức của người dân.',
          'Tuy nhiên, cần phân biệt nguồn gốc của dạng công trình với lịch sử tiếp nhận và phát triển nó tại Việt Nam. Những tư liệu hiện có xác nhận mối liên hệ với kinh nghiệm Triều Tiên, nhưng chưa đủ cơ sở để xác định một cá nhân thiết kế hay một thời điểm duy nhất được xem là ngày ra đời chính thức của loại hầm này.'
        ]
      },
      {
        id: 'sec-2-2',
        subNumber: '2.2',
        subTitle: 'Sự xuất hiện của hầm chữ A tại Việt Nam',
        paragraphs: [
          'Tại Việt Nam, hầm chữ A được đưa vào sử dụng trong bối cảnh cuộc chiến tranh phá hoại miền Bắc bằng không quân và hải quân của Mỹ ngày càng mở rộng từ giữa thập niên 1960.',
          'Theo Bách khoa Toàn thư Việt Nam, những căn hầm chữ A đầu tiên được quân và dân Khu IV xây dựng khi các hoạt động đánh phá bằng không quân của Mỹ trở nên ác liệt vào đầu năm 1965. Sau đó, loại hình trú ẩn này được phổ biến tại nhiều địa phương miền Bắc và trên chiến trường miền Nam. Việc tiếp nhận kinh nghiệm từ bên ngoài không đồng nghĩa với việc sao chép nguyên trạng. Trong điều kiện thực tế của Việt Nam, hầm chữ A được điều chỉnh về hình thức và vật liệu, phù hợp với nguồn lực tại chỗ cũng như nhu cầu sử dụng của từng cộng đồng.',
          'Trong những năm tiếp theo, đặc biệt là giai đoạn 1966–1967, khi chiến tranh phá hoại diễn ra ngày càng nghiêm trọng, nhu cầu tổ chức các công trình trú ẩn cho nhân dân trở nên cấp thiết. Những hình thức trú ẩn đơn giản trước đó dần được bổ sung và thay thế bằng các dạng có mái che, trong đó hầm chữ A là một loại hình tiêu biểu. Từ khu dân cư đến trường học, cơ sở sản xuất và các địa điểm công cộng, việc bố trí nơi trú ẩn trở thành một phần của hoạt động phòng tránh bom đạn trong đời sống thường ngày.'
        ]
      },
      {
        id: 'sec-2-3',
        subNumber: '2.3',
        subTitle: 'Hầm chữ A và sự phát triển của công tác phòng không nhân dân',
        paragraphs: [
          'Sự phổ biến của hầm chữ A gắn liền với sự hình thành và củng cố hệ thống phòng không nhân dân ở miền Bắc. Đây không đơn thuần là hoạt động xây dựng những nơi trú ẩn riêng lẻ, mà là một phương thức tổ chức toàn xã hội nhằm bảo vệ tính mạng nhân dân, duy trì sản xuất và bảo đảm các hoạt động thiết yếu trong hoàn cảnh chiến tranh.',
          'Một dấu mốc quan trọng là ngày 10/3/1967, Ban Bí thư Trung ương Đảng ban hành Chỉ thị số 144-CT/TW về việc tổ chức một tháng đẩy mạnh công tác phòng không nhân dân. Văn kiện nêu rõ yêu cầu tăng cường làm và tu sửa hầm, hào tại gia đình, đường phố, xí nghiệp, hợp tác xã, trường học, nhà trẻ, bệnh viện và cơ quan. Chỉ thị cũng nhấn mạnh sự cần thiết của hệ thống hầm hào gắn với các địa điểm sinh hoạt, lao động, học tập và những tuyến giao thông quan trọng.',
          'Văn kiện này cho thấy công tác phòng tránh được đặt trong một kế hoạch tổ chức rộng khắp, có sự tham gia của nhiều thành phần xã hội. Hầm trú ẩn không còn là việc riêng của từng gia đình mà trở thành một bộ phận của công tác phòng không nhân dân, được chính quyền và các tổ chức địa phương hướng dẫn, kiểm tra và tổ chức thực hiện.'
        ],
        archivalQuote: {
          quote: 'Tăng cường làm và tu sửa hầm, hào tại gia đình, đường phố, xí nghiệp, hợp tác xã, trường học, nhà trẻ, bệnh viện và cơ quan... bảo đảm gắn với các địa điểm sinh hoạt, lao động, học tập.',
          source: 'Chỉ thị số 144-CT/TW ngày 10/03/1967, Ban Bí thư Trung ương Đảng'
        }
      },
      {
        id: 'sec-2-4',
        subNumber: '2.4',
        subTitle: 'Hầm chữ A trong đời sống miền Bắc và các địa bàn chiến trường',
        paragraphs: [
          'Tại Hà Nội, công tác phòng tránh bom đạn gắn liền với hoạt động sơ tán và tổ chức lại đời sống đô thị. Năm 1965, thành phố bắt đầu triển khai sơ tán người dân, trường học, cơ quan và cơ sở sản xuất đến các khu vực ngoại thành, đồng thời xây dựng hệ thống hầm trú ẩn và giao thông hào tại những nơi người dân tiếp tục sinh sống và làm việc.',
          'Theo thông tin được Bộ Văn hóa, Thể thao và Du lịch công bố trong tọa đàm Lớp học thời chiến – Ký ức vùng sơ tán tổ chức tại Bảo tàng Hà Nội ngày 8/10/2026, đến giữa năm 1972, các huyện ngoại thành đã tiếp nhận khoảng 500.000 người sơ tán cùng 1.200 cơ quan, trường học và nhà máy. Trong khi đó, tại nội thành, quân và dân Thủ đô xây dựng hơn 630.000 hố cá nhân và hầm tập thể, kết hợp với hàng vạn kilômét hào giao thông, tạo nơi trú ẩn cho khoảng 900.000 người.',
          'Những con số này phản ánh quy mô của toàn bộ hệ thống phòng tránh tại Hà Nội, không phải số lượng riêng của hầm chữ A. Tuy nhiên, chúng cho thấy vai trò của những công trình trú ẩn như hầm chữ A trong đời sống đô thị thời chiến. Tại nhà ở, trường học, nơi làm việc và các địa điểm công cộng, việc có nơi trú ẩn gần gũi trở thành một yêu cầu gắn liền với sinh hoạt hằng ngày.',
          'Ở miền Trung, đặc biệt tại những địa bàn chịu sức ép chiến tranh lớn như Vĩnh Linh, công tác phòng tránh phát triển thành hệ thống đa dạng gồm hầm, hào và địa đạo. Hầm chữ A xuất hiện bên cạnh nhiều loại công trình khác, phục vụ việc trú ẩn và duy trì đời sống trong những điều kiện hết sức khó khăn.',
          'Tại một số khu vực, công trình ngầm không chỉ còn là nơi tránh bom đạn tạm thời mà dần trở thành không gian sinh hoạt và làm việc. Tuy nhiên, cần phân biệt hầm chữ A với những hệ thống địa đạo và công sự quy mô lớn. Hầm chữ A là một loại hình trú ẩn được nhận diện qua cấu trúc đặc trưng, còn địa đạo là hệ thống đường hầm ngầm có tính liên kết và chức năng rộng hơn.'
        ]
      }
    ]
  },
  {
    id: 'chap-3-purpose',
    number: '03',
    title: 'Công dụng và Vai trò',
    subtitle: 'Nơi chở che sinh mạng, duy trì sinh hoạt và bảo vệ sự nghiệp giáo dục',
    summary: 'Phân tích các vai trò nòng cốt: giảm thiểu phơi nhiễm trước bom đạn, duy trì sản xuất, che chở những lớp học sơ tán và bảo vệ căn cứ chỉ huy quân sự.',
    sections: [
      {
        id: 'sec-3-1',
        subNumber: '3.1',
        subTitle: 'Chức năng chính: Bảo vệ con người trước các cuộc đánh phá',
        paragraphs: [
          'Hầm chữ A được sử dụng chủ yếu để tạo nơi trú ẩn cho con người trong các đợt không kích và pháo kích. Trong bối cảnh chiến tranh, khi những địa điểm sinh hoạt, học tập và lao động có thể trở thành khu vực nguy hiểm, việc bố trí nơi ẩn nấp gần nơi hoạt động hằng ngày có ý nghĩa thiết thực đối với công tác bảo vệ dân cư.',
          'Đặc trưng của công trình là có phần che chắn phía trên và không gian trú ẩn bên trong. Cấu trúc này giúp giảm mức độ phơi nhiễm trước một số nguy cơ từ bom đạn, mảnh vỡ và vật liệu đổ sập so với việc hoàn toàn ở ngoài trời. Tuy nhiên, khả năng bảo vệ thực tế phụ thuộc vào cấu trúc, tình trạng công trình và hoàn cảnh xảy ra sự cố; không thể xem hầm chữ A là công trình có khả năng chống chịu tuyệt đối trước mọi loại bom đạn.',
          'Trong các tài liệu và ký ức thời chiến, hầm chữ A thường được nhắc đến như một nơi trú ẩn quen thuộc của nhiều gia đình, trường học và cơ sở công cộng. Hình ảnh người dân nhanh chóng tìm nơi ẩn nấp khi có tín hiệu báo động đã trở thành một phần đặc trưng của đời sống miền Bắc trong những năm tháng chiến tranh.'
        ]
      },
      {
        id: 'sec-3-2',
        subNumber: '3.2',
        subTitle: 'Nơi trú ẩn trong sinh hoạt và lao động thường ngày',
        paragraphs: [
          'Một trong những đặc điểm nổi bật của hầm chữ A là sự gắn bó trực tiếp với những địa điểm sinh hoạt của người dân. Khác với những công trình trú ẩn tập trung chỉ xuất hiện tại một số khu vực nhất định, loại hầm này được sử dụng ở nhiều môi trường khác nhau, từ khu dân cư đến trường học, công sở, bệnh viện và nơi sản xuất.',
          'Đối với các gia đình, hầm là nơi trú ẩn khi có báo động, giúp bảo vệ các thành viên trong những thời điểm nguy hiểm. Tại trường học, những căn hầm đặt gần khu vực lớp học gắn liền với ký ức của nhiều thế hệ học sinh. Những buổi học có thể bị gián đoạn bởi tiếng còi báo động, sau đó tiếp tục khi tình hình cho phép. Tại các cơ sở sản xuất và công trình công cộng, hệ thống trú ẩn góp phần duy trì hoạt động trong hoàn cảnh chiến tranh.',
          'Hầm chữ A vì thế không chỉ phục vụ một tình huống khẩn cấp đơn lẻ mà còn gắn với quá trình tổ chức cuộc sống trong thời chiến. Nó phản ánh nỗ lực của người dân trong việc duy trì sinh hoạt, học tập và lao động giữa những biến động do chiến tranh gây ra.'
        ]
      },
      {
        id: 'sec-3-3',
        subNumber: '3.3',
        subTitle: 'Vai trò trong hệ thống phòng không nhân dân',
        paragraphs: [
          'Trong công tác phòng không nhân dân, hầm trú ẩn là một thành phần của hệ thống phòng tránh rộng lớn hơn, kết hợp với sơ tán, báo động, quan sát và các hoạt động cứu hộ, cứu thương.',
          'Chỉ thị số 144-CT/TW năm 1967 thể hiện rõ cách tiếp cận toàn diện này. Bên cạnh yêu cầu bảo đảm nơi trú ẩn, văn kiện còn đề cập đến hoạt động tổ chức các trạm quan sát, thông báo tình hình, hướng dẫn nhân dân sơ tán và điều chỉnh sinh hoạt, sản xuất cho phù hợp với hoàn cảnh chiến tranh.',
          'Như vậy, hiệu quả của công tác phòng không nhân dân không chỉ phụ thuộc vào số lượng hầm được xây dựng mà còn gắn với khả năng tổ chức, phối hợp và ý thức của cộng đồng. Hầm chữ A là một bộ phận hữu hình của hệ thống ấy, đại diện cho sự kết hợp giữa giải pháp kỹ thuật và tinh thần chủ động bảo vệ con người của toàn xã hội.'
        ]
      },
      {
        id: 'sec-3-4',
        subNumber: '3.4',
        subTitle: 'Vai trò đối với lực lượng quân sự',
        paragraphs: [
          'Bên cạnh công dụng dân sự, các dạng hầm chữ A cũng được sử dụng trong một số môi trường quân sự. Tại các căn cứ trong thời kỳ kháng chiến, công trình trú ẩn góp phần bảo vệ cán bộ, chiến sĩ và hỗ trợ duy trì hoạt động của các cơ quan, đơn vị trong điều kiện chiến tranh.',
          'Một ví dụ được ghi nhận trong nghiên cứu của Vũ Đình Tâm về Căn cứ Quân ủy, Bộ Chỉ huy Miền tại Bình Phước là sự hiện diện của các hầm chữ A trong khu vực căn cứ. Công trình được bố trí trong hệ thống kiến trúc quân sự phục vụ hoạt động của cơ quan chỉ huy thời chiến. Những tư liệu này cho thấy loại hình hầm chữ A không chỉ gắn với sinh hoạt dân sự mà còn được tiếp nhận và điều chỉnh cho những nhu cầu bảo đảm an toàn của lực lượng quân sự.'
        ]
      }
    ]
  },
  {
    id: 'chap-4-structure',
    number: '04',
    title: 'Đặc điểm Cấu tạo và Đặc tính Kỹ thuật',
    subtitle: 'Nhận diện hình thái, hệ thống khung kèo, vật liệu bản địa và giới hạn công trình',
    summary: 'Nhận biết kết cấu giàn kèo dốc tam giác, vật liệu tre gỗ địa phương, lớp che phủ đất và những điều kiện sinh hoạt gian khổ trong lòng hầm.',
    sections: [
      {
        id: 'sec-4-1',
        subNumber: '4.1',
        subTitle: 'Hình dạng tổng thể và đặc điểm nhận diện',
        paragraphs: [
          'Đặc điểm dễ nhận biết nhất của hầm chữ A là phần khung phía trên có hình dạng tương tự mái nhà hai dốc. Khi quan sát mặt cắt ngang, hai phía mái nghiêng gặp nhau tại đỉnh, tạo thành hình tam giác đặc trưng của chữ A. Chính hình dáng này tạo nên tên gọi phổ biến của công trình.',
          'Hầm thường được bố trí với phần không gian trú ẩn nằm thấp hơn mặt đất hoặc kết hợp giữa phần chìm và phần nổi. Phía trên có bộ phận che phủ, tạo thành không gian kín tương đối so với môi trường bên ngoài. Tùy điều kiện và mục đích sử dụng, hình thức hoàn thiện của từng hầm có thể khác nhau.',
          'Thiết kế này khác với những hố trú ẩn cá nhân đơn giản không có phần khung mái. Sự xuất hiện của cấu trúc che phủ khiến hầm chữ A trở thành một dạng công trình có hình thái rõ ràng, dễ phân biệt trong các tư liệu hình ảnh thời chiến.'
        ]
      },
      {
        id: 'sec-4-2',
        subNumber: '4.2',
        subTitle: 'Hệ thống khung và vật liệu',
        paragraphs: [
          'Trong lịch sử sử dụng tại Việt Nam, vật liệu làm hầm chữ A có sự thay đổi theo điều kiện từng địa phương và nguồn lực sẵn có.',
          'Ở nhiều khu vực, tre và gỗ được sử dụng làm những thành phần chính của công trình. Đây là những vật liệu quen thuộc trong đời sống nông thôn, có thể tìm thấy tại chỗ và phù hợp với điều kiện khan hiếm vật tư trong chiến tranh. Một số dạng hầm khác sử dụng cấu kiện kim loại hoặc các thành phần bê tông đúc sẵn.',
          'Sự đa dạng về vật liệu cho thấy hầm chữ A không phải một mẫu công trình được xây dựng hoàn toàn giống nhau ở mọi nơi. Các địa phương có thể điều chỉnh hình thức theo điều kiện tự nhiên, nguồn vật liệu và nhu cầu sử dụng. Tuy nhiên, đặc điểm nhận diện chung vẫn là cấu trúc dạng chữ A tạo nên phần không gian trú ẩn.',
          'Về mặt lịch sử kỹ thuật, đây là ví dụ tiêu biểu cho việc vận dụng những vật liệu quen thuộc và khả năng tổ chức lao động tại chỗ nhằm đáp ứng một nhu cầu cấp thiết của xã hội trong chiến tranh.'
        ]
      },
      {
        id: 'sec-4-3',
        subNumber: '4.3',
        subTitle: 'Phần che phủ và không gian trú ẩn',
        paragraphs: [
          'Phần che phủ là thành phần quan trọng giúp phân biệt hầm chữ A với những dạng hố trú ẩn không có mái. Trong những hiện vật và tư liệu lịch sử được ghi nhận, bề mặt công trình thường được phủ đất hoặc kết hợp với những vật liệu sẵn có tại địa phương.',
          'Phía bên trong là không gian dành cho người trú ẩn. Tùy theo từng loại hầm, không gian có thể đáp ứng nhu cầu của một cá nhân, một gia đình hoặc một nhóm người. Một số công trình tại địa phương được tổ chức để phục vụ nhiều người cùng lúc, trong khi những hầm khác có quy mô nhỏ hơn và gắn với từng hộ gia đình.',
          'Không gian trú ẩn thường chật hẹp và thiếu tiện nghi so với điều kiện sinh hoạt thông thường. Trong hoàn cảnh chiến tranh kéo dài, những hạn chế về ánh sáng, độ thông thoáng, độ ẩm và điều kiện sinh hoạt là những khó khăn mà người dân phải đối mặt.',
          'Hồi ức của tác giả Nguyễn Duy Xuân, đăng trên Báo Đắk Lắk năm 2023, ghi lại việc một số gia đình tại Nghệ An sử dụng hầm chữ A không chỉ để tránh bom mà còn là nơi học tập và nghỉ ngơi trong thời kỳ chiến tranh phá hoại. Tác giả cũng nhắc đến tình trạng ẩm thấp, thấm nước và sự bất tiện trong sinh hoạt. Những trải nghiệm này giúp hình dung rõ hơn điều kiện thực tế của người dân, tránh việc chỉ nhìn nhận hầm chữ A qua hình thức cấu tạo mà bỏ qua những khó khăn gắn với đời sống bên trong.'
        ]
      },
      {
        id: 'sec-4-4',
        subNumber: '4.4',
        subTitle: 'Lối ra vào và khả năng tiếp cận',
        paragraphs: [
          'Lối ra vào là bộ phận không thể thiếu của công trình, tạo điều kiện để con người tiếp cận không gian trú ẩn. Tùy theo từng dạng hầm, cấu trúc lối vào và hình thức mở cửa có thể khác nhau. Một số tư liệu thời chiến ghi nhận các công trình có lối thông ở hai đầu, trong khi những dạng khác có cách tổ chức cửa riêng phù hợp với mục đích sử dụng.',
          'Ngoài hầm chữ A đơn lẻ, tại một số địa phương, công trình còn được đặt trong mối liên hệ với các tuyến giao thông hào và không gian sinh hoạt khác. Điều này phản ánh quá trình phát triển từ những nơi trú ẩn riêng lẻ thành hệ thống phòng tránh có tính liên kết trong điều kiện chiến tranh kéo dài.'
        ]
      },
      {
        id: 'sec-4-5',
        subNumber: '4.5',
        subTitle: 'Sự đa dạng của các dạng hầm chữ A',
        paragraphs: [
          'Qua các tài liệu lịch sử, có thể nhận thấy hầm chữ A không chỉ tồn tại dưới một hình thức duy nhất. Sự khác biệt xuất hiện từ vật liệu, cấu trúc, số người sử dụng và mục đích của từng công trình.',
          'Có những căn hầm được sử dụng trong phạm vi hộ gia đình, có những hầm tập thể đặt tại địa điểm công cộng và có những công trình được xây dựng trong khu vực căn cứ quân sự. Một số loại được làm từ vật liệu truyền thống, trong khi những loại khác sử dụng cấu kiện bê tông đúc sẵn.',
          'Trong quá trình sử dụng, hầm chữ A cũng được cải tiến để đáp ứng những điều kiện thực tế khác nhau. Điều này cho thấy đây là một loại hình công trình có tính thích ứng, phát triển từ nhu cầu phòng tránh trong chiến tranh, chứ không phải một mẫu vật duy nhất có kích thước và cấu tạo thống nhất trên toàn quốc.'
        ]
      },
      {
        id: 'sec-4-6',
        subNumber: '4.6',
        subTitle: 'Đặc tính và giới hạn của công trình',
        paragraphs: [
          'Xét về đặc điểm kỹ thuật, hầm chữ A có hình thức tương đối đơn giản, cấu trúc dễ nhận diện và có thể sử dụng nhiều loại vật liệu khác nhau. So với những công trình ngầm quy mô lớn, đây là loại hình trú ẩn phù hợp hơn với nhu cầu tổ chức tại nhiều địa điểm dân cư và cơ sở sinh hoạt.',
          'Tuy nhiên, không nên xem hầm chữ A là công trình có khả năng bảo vệ tuyệt đối. Điều kiện địa hình, chất lượng công trình, tình trạng vật liệu và tính chất của các sự cố xảy ra đều có ảnh hưởng đến hiệu quả bảo vệ. Những trường hợp công trình tồn tại sau các trận đánh phá được ghi lại trong hồi ức không thể trở thành cơ sở để khẳng định một mức độ chống chịu chung cho mọi hầm chữ A.',
          'Điều quan trọng khi nghiên cứu hiện vật là nhận thức được cả giá trị và giới hạn của loại công trình này. Hầm chữ A là một giải pháp phòng tránh có ý nghĩa lịch sử trong điều kiện chiến tranh, nhưng không phải tiêu chuẩn kỹ thuật cho các công trình trú ẩn hiện đại.'
        ],
        tableData: {
          headers: ['Bộ phận / Đặc điểm', 'Vai trò', 'Ý nghĩa nhận diện'],
          rows: [
            ['Phần khung phía trên', 'Tạo hình dáng và bộ phận che phủ của hầm', 'Có mặt cắt đặc trưng hình chữ A'],
            ['Hai mái nghiêng', 'Hình thành phần bao che phía trên', 'Làm nên tên gọi của công trình'],
            ['Phần thân hầm', 'Tạo không gian trú ẩn', 'Thường nằm thấp hơn mặt đất'],
            ['Lớp che phủ bên ngoài', 'Tách biệt không gian bên trong với môi trường ngoài', 'Có thể nhận thấy qua hình thái tổng thể của công trình'],
            ['Lối ra vào', 'Phục vụ việc tiếp cận không gian trú ẩn', 'Có thể thay đổi tùy dạng hầm'],
            ['Các vật liệu kết cấu', 'Tạo nên hình thái và đặc điểm vật chất', 'Phản ánh điều kiện sản xuất và nguồn lực của từng địa phương']
          ]
        }
      }
    ]
  },
  {
    id: 'chap-5-history-life',
    number: '05',
    title: 'Hầm Chữ A trong Lịch sử Quốc phòng và Đời sống Nhân dân Việt Nam',
    subtitle: 'Biểu tượng của tinh thần bám trụ, sáng tạo và ý chí sắt đá bảo vệ hòa bình',
    summary: 'Phòng không nhân dân toàn diện, tuổi thơ mũ rơm trường sơ tán, kỳ tích làng hầm Vĩnh Linh và năng lực thích ứng của dân tộc.',
    sections: [
      {
        id: 'sec-5-1',
        subNumber: '5.1',
        subTitle: 'Hình ảnh của công tác phòng không nhân dân trong thời chiến',
        paragraphs: [
          'Trong cuộc kháng chiến chống Mỹ, cứu nước, hầm chữ A trở thành một hình ảnh tiêu biểu của công tác phòng không nhân dân ở miền Bắc Việt Nam. Sự hiện diện của những căn hầm tại các địa điểm sinh hoạt và làm việc cho thấy hoạt động phòng tránh bom đạn đã trở thành một phần của đời sống xã hội.',
          'Công tác này không chỉ được thực hiện bởi các cơ quan quân sự mà còn có sự tham gia của chính quyền địa phương, các tổ chức đoàn thể và đông đảo nhân dân. Mỗi khu dân cư, trường học, cơ sở sản xuất đều phải quan tâm đến việc bảo vệ con người và duy trì hoạt động thiết yếu trong hoàn cảnh chiến tranh. Hầm chữ A là một biểu hiện trực quan của tinh thần chủ động ấy.',
          'Chỉ thị số 144-CT/TW năm 1967 cho thấy công tác bảo vệ tính mạng nhân dân được đặt song song với yêu cầu duy trì sản xuất, bảo vệ tài sản và ổn định đời sống. Đây là một trong những nội dung quan trọng của đường lối tổ chức phòng không nhân dân trong kháng chiến.'
        ]
      },
      {
        id: 'sec-5-2',
        subNumber: '5.2',
        subTitle: 'Hầm chữ A trong ký ức của những lớp học thời chiến',
        paragraphs: [
          'Một trong những hình ảnh đặc biệt gắn với hầm chữ A là cuộc sống của học sinh trong những năm tháng chiến tranh phá hoại. Khi các cuộc không kích đe dọa nhiều khu vực dân cư, việc học tập không thể hoàn toàn dừng lại. Nhiều trường học được sơ tán về nông thôn, tổ chức các lớp học trong điều kiện còn thiếu thốn và luôn phải chú ý đến công tác phòng tránh.',
          'Bên cạnh sách vở, học sinh thời chiến còn quen thuộc với những chiếc mũ rơm, túi cứu thương và những căn hầm trú ẩn gần nơi học tập. Khi có báo động, việc học được tạm dừng để mọi người tìm đến nơi trú ẩn. Sau khi tình hình cho phép, các hoạt động lại tiếp tục.',
          'Những câu chuyện ấy đã được tái hiện qua nhiều hoạt động giáo dục lịch sử. Ngày 23/11/2020, Khu di tích Nhà tù Hỏa Lò tổ chức trưng bày Để bầu trời mãi xanh, giới thiệu hình ảnh hầm chữ A cùng những ký ức về đời sống của người dân miền Bắc trong hai đợt chiến tranh phá hoại giai đoạn 1964–1972. Trưng bày còn tổ chức trải nghiệm gõ kẻng báo động, đội mũ rơm và tìm hiểu không gian trú ẩn, giúp người xem hình dung rõ hơn đời sống của các thế hệ đi trước.'
        ]
      },
      {
        id: 'sec-5-3',
        subNumber: '5.3',
        subTitle: 'Vĩnh Linh – không gian đặc biệt của hệ thống hầm, hào và địa đạo',
        paragraphs: [
          'Trong lịch sử phòng tránh bom đạn ở Việt Nam, Vĩnh Linh là một địa bàn đặc biệt. Nằm gần giới tuyến quân sự tạm thời sau Hiệp định Genève năm 1954, khu vực này phải đối mặt với những đợt đánh phá kéo dài và khốc liệt trong cuộc kháng chiến chống Mỹ.',
          'Trước hoàn cảnh đó, quân và dân Vĩnh Linh đã xây dựng một hệ thống hầm, hào và địa đạo rộng khắp. Theo tư liệu của Bảo tàng Lịch sử Quốc gia, hệ thống này phát triển qua nhiều giai đoạn, từ những hố trú ẩn đơn giản đến các dạng công trình có mái che, hầm chữ A và những không gian ngầm phục vụ sinh hoạt.',
          'Điểm đáng chú ý là các công trình tại Vĩnh Linh không còn chỉ phục vụ nhu cầu trú ẩn trong thời gian ngắn. Trong điều kiện chiến tranh kéo dài, hệ thống hầm ngầm được mở rộng để hỗ trợ hoạt động học tập, sinh hoạt, làm việc và chăm sóc sức khỏe của người dân. Nhiều hạng mục được kết nối với nhau thành một không gian sinh hoạt dưới lòng đất, phản ánh khả năng tổ chức đời sống đặc biệt của cộng đồng trong hoàn cảnh chiến tranh.',
          'Cần phân biệt rõ hệ thống địa đạo tại Vĩnh Linh với một căn hầm chữ A đơn lẻ. Hầm chữ A là một dạng công trình có hình dáng đặc trưng, còn hệ thống hầm, hào, địa đạo là một mạng lưới công trình rộng lớn với nhiều loại hình và chức năng khác nhau. Sự kết hợp giữa các dạng công trình này tạo nên một dấu ấn đặc biệt trong lịch sử phòng tránh bom đạn của Việt Nam.'
        ]
      },
      {
        id: 'sec-5-4',
        subNumber: '5.4',
        subTitle: 'Giá trị của sự sáng tạo và thích ứng trong điều kiện chiến tranh',
        paragraphs: [
          'Một khía cạnh đáng chú ý khi nghiên cứu hầm chữ A là khả năng tiếp nhận kinh nghiệm và điều chỉnh cho phù hợp với hoàn cảnh thực tế của Việt Nam. Từ một dạng công trình có nguồn gốc gắn với kinh nghiệm chiến tranh Triều Tiên, hầm chữ A được quân và dân Việt Nam tiếp nhận, cải tiến và sử dụng trong những điều kiện địa hình, khí hậu và nguồn lực khác nhau.',
          'Sự đa dạng về vật liệu và hình thức sử dụng cho thấy quá trình thích ứng không diễn ra theo một khuôn mẫu cứng nhắc. Tại những địa phương khác nhau, người dân và các lực lượng công binh đã vận dụng điều kiện sẵn có để đáp ứng nhu cầu bảo vệ con người trong thời chiến.',
          'Giá trị nổi bật của quá trình này không chỉ nằm ở cấu trúc của công trình mà còn ở khả năng tổ chức, huy động nguồn lực và sự tham gia của cộng đồng. Hầm chữ A là một ví dụ về việc giải quyết một vấn đề cấp thiết bằng sự kết hợp giữa kinh nghiệm kỹ thuật, điều kiện thực tiễn và tinh thần trách nhiệm đối với cộng đồng.'
        ]
      }
    ]
  },
  {
    id: 'chap-6-value',
    number: '06',
    title: 'Giá trị Lịch sử và Ý nghĩa của Hiện vật',
    subtitle: 'Bài học về sức mạnh lòng dân và thông điệp hòa bình cho thế hệ mai sau',
    summary: 'Hầm chữ A nhắc nhở rằng lịch sử quốc phòng không chỉ tạo nên từ những cỗ vũ khí hiện đại mà được vun đắp từ những giải pháp thầm lặng bảo vệ con người và sự sống.',
    sections: [
      {
        id: 'sec-6-1',
        subTitle: 'Ý nghĩa Đương đại và Bài học Lịch sử',
        paragraphs: [
          'Hầm trú ẩn chữ A là một loại hình công trình gắn liền với ký ức về cuộc kháng chiến chống Mỹ, cứu nước. Từ những căn hầm nhỏ trong khu dân cư, trường học và cơ sở sản xuất đến những công trình trong các căn cứ quân sự, loại hình này phản ánh một giai đoạn mà nhiệm vụ bảo vệ con người trước bom đạn trở thành yêu cầu thường trực của xã hội.',
          'Giá trị lịch sử của hầm chữ A không chỉ nằm ở hình dáng hay vật liệu cấu tạo. Đó còn là dấu tích của quá trình tổ chức phòng không nhân dân, trong đó quân đội, chính quyền và nhân dân cùng tham gia xây dựng hệ thống phòng tránh, duy trì sản xuất và bảo vệ đời sống. Những công trình tưởng chừng nhỏ bé ấy đã góp phần tạo nên một mạng lưới phòng tránh rộng khắp, gắn với nhiều hoạt động thiết yếu trong hoàn cảnh chiến tranh.',
          'Thông qua việc tìm hiểu hầm chữ A, người học có thể nhận thức rõ hơn rằng lịch sử quốc phòng không chỉ được hình thành từ những trận đánh hay những loại vũ khí, trang bị quân sự hiện đại. Lịch sử ấy còn được tạo nên bởi những hoạt động bảo vệ đời sống thường ngày, những nỗ lực tổ chức cộng đồng và sự hy sinh thầm lặng của những con người đã sống, học tập và lao động trong hoàn cảnh vô cùng khó khăn.',
          'Đối với thế hệ trẻ hôm nay, hầm chữ A là một hiện vật có giá trị giáo dục đặc biệt. Nó giúp kết nối kiến thức lịch sử với những trải nghiệm cụ thể về đời sống thời chiến, đồng thời nhắc nhở người xem về giá trị của hòa bình, sự an toàn và điều kiện học tập, lao động mà các thế hệ hiện tại đang được thụ hưởng.',
          'Nhìn lại lịch sử của hầm chữ A cũng là nhìn lại tinh thần chủ động, đoàn kết và ý chí vượt qua khó khăn của quân và dân Việt Nam. Những căn hầm từng nằm lặng lẽ bên đường làng, trong sân trường hay giữa các khu dân cư ngày nay đã trở thành dấu tích lịch sử, lưu giữ câu chuyện về một thời chiến tranh và khát vọng bảo vệ cuộc sống của con người.'
        ]
      }
    ]
  }
];
