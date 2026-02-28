import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';
import DataTable from './DataTable';
import { toast } from 'react-toastify';

const UserRegistration = () => {
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Gender: '',
    Language: [],
    Type: '',
    Relation: 'Married',
    Description: '',
    DOB: '',
    isEditing: false,
    editingEntry: null,
  });
  const [Data, setData] = useState(() => {
    const stored = localStorage.getItem('userData');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(Data));
  }, [Data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setUser((prev) => {
        const list = prev.Language;
        if (checked) return { ...prev, Language: [...list, value] };
        return { ...prev, Language: list.filter((v) => v !== value) };
      });
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  //age calculator
  const calculateAge = (DOB) => {
    const birth = new Date(DOB);
    const today = new Date();

    if (birth > today) {
      toast.error('Date of birth cannot be in the future');
      return null;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (today.getDate() < birth.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years <= 0 && months <= 0) {
      toast.error('Please select a valid Date of Birth');
      return null;
    }
    const yearStr = years ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      FirstName,
      LastName,
      Email,
      Password,
      Gender,
      Language,
      Relation,
      Type,
      Description,
      DOB,
      isEditing,
      editingEntry,
    } = user;

    if (
      ![
        FirstName,
        LastName,
        Email,
        Password,
        Gender,
        Relation,
        Type,
        Description,
        DOB,
      ].every(Boolean)
    ) {
      return toast.error('Please fill all fields');
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

    function validatePassword(pwd) {
      return passwordRegex.test(pwd);
    }
    if (!validatePassword(user.Password)) {
      return toast.error(
        'Password must be at least 8 characters long,\n' +
          'include uppercase, lowercase, a number, and a special character.'
      );
    }

    const age = calculateAge(DOB);
    if (!age) return;

    const entry = {
      id: isEditing ? editingEntry.id : crypto.randomUUID(),
      Name: { FirstName, LastName },
      Email: Email,
      Password: Password,
      Gender: Gender,
      Type: Type,
      Language: Language,
      Relation: Relation,
      Description: Description,
      DOB: DOB,
      Age: age,
    };

    const exists = Data.some(
      (item) =>
        item.Email.toLowerCase() === Email.toLowerCase() &&
        (!isEditing || item.id !== editingEntry.id)
    );
    if (exists) return toast.error('Email already exists');

    setData((prev) =>
      isEditing
        ? prev.map((item) => (item.id === editingEntry.id ? entry : item))
        : [...prev, entry]
    );

    setUser({
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Gender: '',
      Type: '',
      Language: [],
      Relation: 'Married',
      Description: '',
      DOB: '',
      isEditing: false,
      editingEntry: null,
    });
  };

  const handleEdit = (entry) => {
    setUser({
      FirstName: entry.Name.FirstName,
      LastName: entry.Name.LastName,
      Email: entry.Email,
      Password: entry.Password,
      Gender: entry.Gender,
      Type: entry.Type,
      Language: entry.Language,
      Relation: entry.Relation,
      Description: entry.Description,
      DOB: entry.DOB,
      isEditing: true,
      editingEntry: entry,
    });
  };

  const handleCancel = () =>
    setUser((prev) => ({
      ...prev,
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Gender: '',
      Type: '',
      Language: [],
      Relation: 'Married',
      Description: '',
      DOB: '',
      isEditing: false,
      editingEntry: null,
    }));

  const handleDelete = (id) => {
    const updatedData = Data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <FormComponent
        user={user}
        onInputChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <DataTable data={Data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserRegistration;
