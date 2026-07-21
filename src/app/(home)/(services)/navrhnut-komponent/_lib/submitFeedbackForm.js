const appendValue = (formData, key, value) => {
  formData.append(key, value ?? '');
};

export const buildFeedbackFormData = (values) => {
  const formData = new FormData();

  appendValue(formData, 'organizacia', values.organizacia);
  appendValue(formData, 'meno', values.meno);
  appendValue(formData, 'priezvisko', values.priezvisko);
  appendValue(formData, 'email', values.email);
  appendValue(formData, 'typZameru', values.typZameru);
  appendValue(formData, 'nazovKomponentu', values.nazovKomponentu);
  appendValue(formData, 'popisZameru', values.popisZameru);
  appendValue(formData, 'dovodZmeny', values.dovodZmeny);
  appendValue(formData, 'doplnujuceInformacie', values.doplnujuceInformacie);
  appendValue(formData, 'url', values.url);
  appendValue(formData, 'suhlas', String(values.suhlas));

  values.prilohy?.forEach((file) => {
    formData.append('prilohy', file);
  });

  return formData;
};

const normalizeServerErrors = (errors) => {
  if (!Array.isArray(errors)) {
    return [
      {
        id: 'odoslat-zamer',
        message: 'Formulár sa nepodarilo odoslať. Skúste to znova.',
      },
    ];
  }

  return errors.map((error) => {
    if (typeof error === 'string') {
      return {
        id: 'odoslat-zamer',
        message: error,
      };
    }

    return error;
  });
};

export const submitFeedbackForm = async (values) => {
  const response = await fetch('/api/spatna-vazba', {
    method: 'POST',
    body: buildFeedbackFormData(values),
  });

  let result = null;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    const error = new Error(
      result?.message || 'Formulár sa nepodarilo odoslať.'
    );

    error.errors = normalizeServerErrors(result?.errors);

    throw error;
  }

  return result;
};