import React, { useState } from 'react';
import './farmerregistration.css';

function FarmerRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [hasInternetAccess, setHasInternetAccess] = useState(false);
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipAddress, setZipAddress] = useState('');
  const [location, setLocation] = useState({country: '', county: '', subCounty: '', area: ''});
  const [ageBracket, setAgeBracket] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [hasOtherIncome, setHasOtherIncome] = useState('No');
  const [receivedAgriculturalTraining, setReceivedAgriculturalTraining] = useState('No');
  const [interactedWithFarmingTech, setInteractedWithFarmingTech] = useState('No');
  const [farmingTechDetails, setFarmingTechDetails] = useState('');
  const [ownsFarmMachinery, setOwnsFarmMachinery] = useState('No');
  const [farmSize, setFarmSize] = useState('');
  const [livestockProductionType, setLivestockProductionType] = useState('');
  const [animals, setAnimals] = useState([]);
  const [herdSize, setHerdSize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted. Implement submission logic.');
  };
  const handleAnimalChange = (event, animal) => {
    if (event.target.checked) {
      setAnimals((prevAnimals) => [...prevAnimals, animal]);
    } else {
      setAnimals((prevAnimals) => prevAnimals.filter((a) => a !== animal));
    }
  };
  const handleLocationChange = (event, field) => {
    setLocation({...location, [field]: event.target.value});
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Personal Identity</h2>
      {/* Input for First Name */}
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </label>
      <label className="label">
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label className="label">
        What is your professional occupation:
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label className="label">
  Do you have Internet access:
  <label className="radio-group">
    Yes
    <input
      type="radio"
      name="hasInternetAccess"
      value="Yes"
      checked={hasInternetAccess === 'Yes'}
      onChange={() => setHasInternetAccess('Yes')}
    />
  </label>
  <label className="radio-group">
    No
    <input
      type="radio"
      name="hasInternetAccess"
      value="No"
      checked={hasInternetAccess === 'No'}
      onChange={() => setHasInternetAccess('No')}
    />
  </label>
</label>

    <h2 className="form-heading">Contact Information</h2>
      <label>
        Telephone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="label">
        ZIP Address:
        <input
          type="text"
          value={zipAddress}
          onChange={(e) => setZipAddress(e.target.value)}
        />
      </label>
      

      <h2>Location</h2>
      <label>
      subCounty:
        <input
          type="text"
          value={location.subCounty}
          onChange={(e) => handleLocationChange(e, 'subCountry')}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={location.country}
          onChange={(e) => handleLocationChange(e, 'country')}
        />
      </label>

      <h2>Personal and Farm Information</h2>
      <label>
        Age Bracket:
        <select
          value={ageBracket}
          onChange={(e) => setAgeBracket(e.target.value)}>
          <option value="18-24">18-24</option>
          <option value="25-31">25-31</option>
          <option value="32-40">32-40</option>
          <option value="41-55">41-55</option>
          <option value="56-65">56-65</option>
          <option value="70">Above 65</option>
          {/* Add other options similarly */}
        </select>
      </label>
      <label>
    Male
    <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === 'Male'}
        onChange={(e) => setGender(e.target.value)}
    />
    </label>
    <label>
    Female
    <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === 'Female'}
        onChange={(e) => setGender(e.target.value)}
    />
    </label>
    <label>
    Other
    <input
        type="radio"
        name="gender"
        value="Other"
        checked={gender === 'Other'}
        onChange={(e) => setGender(e.target.value)}
    />
    </label>
    <br></br>
    <br></br>
    <label>
        What is your highest education level
        <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="College">College</option>
          <option value="University">University degree</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <fieldset>
        <legend>Additional Information</legend>
        
        <label>
          Do you have another source of income apart from farming?
          <input type="radio" name="hasOtherIncome" value="Yes" checked={hasOtherIncome === 'Yes'} onChange={() => setHasOtherIncome('Yes')} /> Yes
          <input type="radio" name="hasOtherIncome" value="No" checked={hasOtherIncome === 'No'} onChange={() => setHasOtherIncome('No')} /> No
        </label>
        <br></br>

        <label>
          Have you received any type of agricultural training?
          <input type="radio" name="receivedAgriculturalTraining" value="Yes" checked={receivedAgriculturalTraining === 'Yes'} onChange={() => setReceivedAgriculturalTraining('Yes')} /> Yes
          <input type="radio" name="receivedAgriculturalTraining" value="No" checked={receivedAgriculturalTraining === 'No'} onChange={() => setReceivedAgriculturalTraining('No')} /> No
        </label>
        <br></br>

        <label>
          Have you interacted with any farming technology before?
          <input type="radio" name="interactedWithFarmingTech" value="Yes" checked={interactedWithFarmingTech === 'Yes'} onChange={() => setInteractedWithFarmingTech('Yes')} /> Yes
          <input type="radio" name="interactedWithFarmingTech" value="No" checked={interactedWithFarmingTech === 'No'} onChange={() => setInteractedWithFarmingTech('No')} /> No
        </label>
        <br></br>

        {interactedWithFarmingTech === 'Yes' && (
          <label>
            If yes, specify:
            <input type="text" value={farmingTechDetails} onChange={(e) => setFarmingTechDetails(e.target.value)} />
          </label>
        )}

        <label>
          Do you own any farm machinery?
          <input type="radio" name="ownsFarmMachinery" value="Yes" checked={ownsFarmMachinery === 'Yes'} onChange={() => setOwnsFarmMachinery('Yes')} /> Yes
          <input type="radio" name="ownsFarmMachinery" value="No" checked={ownsFarmMachinery === 'No'} onChange={() => setOwnsFarmMachinery('No')} /> No
        </label>
      </fieldset>

      <br></br>
      <label>
        What is the size of your farm (in acres)?
        <input type="text" value={farmSize} onChange={(e) => setFarmSize(e.target.value)} />
      </label>
      <br></br>
      <label>
        What is the type of livestock production practiced?
        <select value={livestockProductionType} onChange={(e) => setLivestockProductionType(e.target.value)}>
          <option value="Intensive">Intensive</option>
          <option value="Semi-intensive">Semi-intensive</option>
          <option value="Extensive">Extensive</option>
        </select>
      </label>
      <br></br>
      <br></br>

      <fieldset>
        <legend>What type of animals do you rear?</legend>
        <label>
          Pigs
          <input type="checkbox" checked={animals.includes('Pigs')} onChange={(e) => handleAnimalChange(e, 'Pigs')} />
        </label>
        <label>
        Dairy Cattle
          <input type="checkbox" checked={animals.includes('Dairy Cattle')} onChange={(e) => handleAnimalChange(e, 'Dairy Cattle')} />
        </label>
        <label>
        Dairy Goats
          <input type="checkbox" checked={animals.includes('Dairy Goats')} onChange={(e) => handleAnimalChange(e, 'Dairy Goats')} />
        </label>
        <label>
        Sheep
          <input type="checkbox" checked={animals.includes('Sheep')} onChange={(e) => handleAnimalChange(e, 'Sheep')} />
        </label>
        <label>
        Beef Cattle
          <input type="checkbox" checked={animals.includes('Beef Cattle')} onChange={(e) => handleAnimalChange(e, 'Beef Cattle')} />
        </label>
      <br></br>
      <br></br>
      <label>
         What is the herd size?
        <input type="number" value={herdSize} onChange={(e) => setHerdSize(e.target.value)} />
      </label>
      <br></br>
      </fieldset>
      
      <button type="submit">Save</button>
      <button className="button" type="submit">Next</button>
    </form>
  );
}

export default FarmerRegistrationForm;
