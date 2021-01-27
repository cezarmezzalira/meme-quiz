import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();

  const { name } = router.query;
  return (
    <div>
      {name}
    </div>
  );
}
