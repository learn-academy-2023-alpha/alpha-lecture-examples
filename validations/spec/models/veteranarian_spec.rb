require 'rails_helper'

RSpec.describe Veteranarian, type: :model do
  it 'is valid with valid attributes' do 
    veteranarian = Veteranarian.create(name: 'Dr. Doolittle', patients: 100)
    expect(veteranarian).to be_valid
  end

  it 'is not valid without a name' do 
    veteranarian = Veteranarian.create(patients: 100)
    expect(veteranarian.errors[:name]).to_not be_empty
  end

  it 'is not valid without patients' do 
    # create an instance without the vet's patients so we can check that we cannot succesfully create that instance with validations
    veteranarian = Veteranarian.create(name: 'Dr. Doolittle')
    # We want to check for errors on this instance, specifically on the patients column
    expect(veteranarian.errors[:patients]).to_not be_empty
  end

  it 'is not valid if name is outside 2-20 characters' do 
    veteranarian = Veteranarian.create(name: 'D', patients: 100)
    expect(veteranarian.errors[:name]).to_not be_empty

    long_veteranarian = Veteranarian.create(name: 'Dr. Doolittle talks to the animals', patients: 100)
    expect(long_veteranarian.errors[:name]).to_not be_empty
  end
end
