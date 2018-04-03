import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <section className="jumbotron text-center mb-0 bg-white">
                <div className="container">
                    <h1 className="jumbotron-heading">Việt Nam 1915 - 1920</h1>
                </div>
                <p className="lead text-muted">
                    Năm 1909, Albert Kahn, một chủ nhà băng triệu phú - cũng là một nhà hoạt động từ thiện nổi tiếng người Pháp, bắt đầu tiến hành một dự án đầy tham vọng: xây dựng kho tư liệu ảnh màu cho tất cả các dân tộc trên thế giới. Tại Việt Nam, người được giao nhiệm vụ cầm máy là Leon Busy, một trung úy hậu cần của quân đội lê dương. Đi khắp Bắc Kỳ, Leon chụp khoảng 1700 bức ảnh VN trong thời gian 1915- 1920. "Cái đáng phục nhất ở Albert Kahn là sự say mê và... chịu chơi. Bởi, kĩ thuật rửa ảnh màu hồi đó rất phức tạp, đòi hỏi cần được xử lý ngay bằng công nghệ tiên tiến nhất trước khi gửi về Pháp" - KTS Đoàn Bắc, vốn được dư luận biết tới như một trong những nhà sưu tập ảnh Hà Nội cổ, nhận xét - "Và, chúng ta càng xúc động hơn khi biết Albert phải chịu cảnh phá sản vào năm 1932 và mất trong đói nghèo, còn bộ sưu tập ảnh thì bị sung công và trở thành cơ sở dữ liệu của Bảo tàng Albert Kahn tại Pháp bây giờ”. Trong album này còn có một số ảnh màu của W. Robert More chụp.
                </p>
                <a className="btn btn-outline-primary" onClick={this.openModal}>Về Albert Kahn</a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Về Alber Kahn">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Albert Kahn</h5>
                                        <span className="text-muted text-center">Sinh 3 tháng Ba năm 1860 – Mất 14 tháng Mười Một năm 1940)</span>
                                        <p className="card-text"> Ông là một người Pháp, chủ nhà băng, một người làm thiện nguyện, được biết đến nhờ khởi xướng dự án xây dựng kho tư liệu ảnh màu cho tất cả các dân tộc trên thế giới (The Archives of the Planet). Dự án này kéo dài 22 năm, thu về một bộ sưu tập là 72 nghìn bức ảnh màu, và 183 nghìn mét phim.</p>
                                        <p className="card-text">Ông sinh ra ở Bas-Rhin, Pháp, là người con cả trong 1 gia đình có 4 người con. Cha ông là Louis Kahn, một người Do Thái buôn bán gia súc. Mẹ ông là Babette Kahn (sinh ở Bloch), không được đi học. Bà mẹ của Kahn mất khi ông lên mười tuổi. Following the German annexation of Alsace-Lorraine in 1871, the Kahn family moved to Saint-Mihiel in north-eastern France in 1872 where he continued his studies at the Collège de Saverne from 1873 to 1876. In 1879. Kahn became a bank clerk in Paris, but studied for a degree in the evenings. His tutor was Henri Bergson, who became his lifelong friend. He graduated in 1881 and continued to mix in intellectual circles, making friends with Auguste Rodin and Mathurin Méheut. In 1892 Kahn became a principal associate of the Goudchaux Bank, which was then regarded as one of the most important financial houses of Europe. He also promoted higher education through travelling scholarships. Vào cuối đời, cuộc Đại khủng hoảng kinh tế đã làm khánh kiệt ông, cũng như buộc ông phải dừng dự án của mình. Ông chết tại Boulogne-Billancourt, Hauts-de-Seine, France ngày 14 tháng Mười Một 1940 khi nước Pháp vẫn đang dưới sự chiếm đóng của Phát xít Đức.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </section>
        )
    }

};

export default Jumbotron;