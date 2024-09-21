import { Modal, Select } from "antd";
import React, { useState } from "react";


interface Certification {
  name: string;
  imageUrl: string;
}

const certifications: Certification[] = [
  { name: 'Software Development', imageUrl: '/path/to/certA.jpg' },
  { name: 'Complete SDLC', imageUrl: '/path/to/certB.jpg' },
  { name: 'NestJs Boot Camp', imageUrl: '/path/to/certC.jpg' },
  { name: 'Microservices with NodeJs', imageUrl: '/path/to/certD.jpg' },


];
const { Option } = Select;

const Testimonials:React.FC = () => {

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    const cert = certifications.find(c => c.name === value);
    if (cert) {
      setSelectedCert(cert);
      setIsModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedCert(null);
  };
return (
  <section id="testimonials" className="py-20 dark:text-white">
      <h2 className="text-4xl font-semibold text-center ">Testimonials & Certifications</h2>
     <div className="flex justify-around p-6">
     <div className=" ">
        <blockquote className="max-w-xs">
          <p>"Amazing work! Delivered the project on time."</p>
          <footer className="text-center">- Geophia Academy Center</footer>
          <p>"Excellent Delivery! You render your service efficiently."</p>
          <footer className="text-center">- Rebzee Global</footer>
        </blockquote>
      </div>
      <div>
        <p>View Certifications</p>
        <Select
        className="w-[100px] md:w-[200px] lg:w-[300px]"
        placeholder="Select a certification"
        onChange={handleSelect}
      >
        {certifications.map(cert => (
          <Option key={cert.name} value={cert.name}>
            {cert.name}
          </Option>
        ))}
      </Select>

      {selectedCert && (
        <Modal
          visible={isModalVisible}
          title={selectedCert.name}
          footer={null}
          onCancel={handleModalClose}
        >
          <img
            src={selectedCert.imageUrl}
            alt={selectedCert.name}
            style={{ width: '100%' }}
            className="object-cover rounded-lg"
          />
        </Modal>
      )}
      </div>
     </div>
    </section>
)
    
};

  export default Testimonials