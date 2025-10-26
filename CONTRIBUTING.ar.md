# المساهمة في مستودع التجريب لمجتمع المبرمجين الموريتانيين

مرحباً! تم تصميم مستودع التجريب هذا خصيصاً لـ **تعلم Git و GitHub وتطوير الويب**. 🇲🇷💻

---

## 📚 هل هذه أول مرة هنا؟

1. **اقرأ [دليل المساهمة الرئيسي لمجتمع المبرمجين الموريتانيين](https://github.com/Mauritania-Programmers-Community/.github/blob/main/CONTRIBUTING.ar.md)** للحصول على الإرشادات العامة
2. اتبع الخطوات البسيطة أدناه لهذا المشروع المحدد

---

## ✅ المتطلبات الأساسية

قبل أن تبدأ، تأكد من أن لديك:

### تثبيت Git

**تحقق إذا كان لديك Git:**

```bash
git --version
```

إذا رأيت رقم إصدار (مثل `git version 2.x.x`)، فأنت جاهز! ✅

إذا لم يكن كذلك، قم بتثبيت Git:

- **Windows**: قم بالتحميل من [git-scm.com](https://git-scm.com/download/win)
- **Mac**:
  - التثبيت عبر Homebrew: `brew install git`
  - أو التحميل من [git-scm.com](https://git-scm.com/download/mac)
- **Linux**:
  - Ubuntu/Debian: `sudo apt-get install git`
  - Fedora: `sudo dnf install git`

### حساب GitHub

- أنشئ حساباً مجانياً على [github.com](https://github.com/signup) إذا لم يكن لديك واحد

### محرر أكواد (موصى به)

- [VS Code](https://code.visualstudio.com/) - مجاني ومناسب للمبتدئين
- أو أي محرر نصوص تفضله

---

## 🛠️ أدوات التطوير الاختيارية

**هذه اختيارية!** المشروع يعمل بشكل مثالي بدونها.

### بدون أدوات التطوير (افتراضي)

```bash
# فقط افتح index.html في متصفحك
# يعمل فوراً - لا يلزم إعداد!
```

### مع أدوات التطوير (تجربة مطور أفضل)

**تثبيت Node.js** (إعداد لمرة واحدة):

- قم بالتحميل من [nodejs.org](https://nodejs.org/) (يُنصح بإصدار LTS)
- تحقق من التثبيت: `node --version` و `npm --version`

**الأوامر المتاحة**:

```bash
npm start            # تشغيل الخادم المباشر مع إعادة التحميل التلقائي
npm run lint         # فحص التنسيق + أخطاء JavaScript
npm run lint:format  # فحص تنسيق الكود فقط (Prettier)
npm run lint:js      # فحص أخطاء JavaScript فقط (ESLint)
npm run format       # تنسيق تلقائي لجميع الأكواد باستخدام Prettier
```

**ما تفحصه كل أداة:**
- **Prettier** (التنسيق): المسافة البادئة، التباعد، علامات الاقتباس، طول السطر
- **ESLint** (الجودة): أخطاء بناء الجملة، المتغيرات غير المستخدمة، المتغيرات غير المعرفة

**مستخدمو VS Code** (اختياري):

الإضافات الموصى بها لتجربة مطور أفضل:
- **Prettier** - تنسيق تلقائي عند الحفظ
- **Tailwind CSS IntelliSense** - إكمال تلقائي لفئات CSS
- **Live Server** - إعادة تحميل تلقائية للمتصفح عند الحفظ

قم بالتثبيت عبر سوق إضافات VS Code، ثم قم بتكوين التنسيق التلقائي:
```json
// .vscode/settings.json (أنشئ هذا الملف محلياً)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**تحسين سير العمل**:
```
قبل: تحرير → حفظ → التبديل إلى المتصفح → تحديث → رؤية النتيجة
بعد:  تحرير → حفظ → تنسيق تلقائي + إعادة تحميل تلقائية! ✨
```

---

## 🚀 سير العمل الكامل (خطوة بخطوة)

### الخطوة 1: عمل Fork للمستودع

1. انقر على زر **"Fork"** في أعلى يمين هذه الصفحة
2. هذا ينشئ نسختك الخاصة من المستودع

### الخطوة 2: استنساخ الـ Fork الخاص بك

```bash
# استنسخ الـ fork الخاص بك (وليس المستودع الأصلي)
git clone https://github.com/YOUR-USERNAME/demo-repository.git
cd demo-repository
```

### الخطوة 3: إنشاء فرع جديد

**مهم**: أنشئ دائماً فرعاً جديداً لتغييراتك!

```bash
# أنشئ وانتقل إلى فرع جديد
git checkout -b your-feature-name

# أمثلة على أسماء فروع جيدة:
git checkout -b fix/typo-in-hero
git checkout -b feature/add-testimonials
git checkout -b docs/update-readme
```

### الخطوة 4: قم بإجراء تغييراتك

- افتح الملفات في محررك
- قم بإجراء تغييراتك
- احفظ الملفات

### الخطوة 5: اختبر تغييراتك

```bash
# افتح index.html في المتصفح
# - انقر مرتين على index.html، أو
# - استخدم VS Code Live Server

# تحقق من:
# - هل يبدو صحيحاً؟
# - هل هو متجاوب على الهاتف المحمول؟
# - أي أخطاء في وحدة التحكم؟ (F12)

# اختياري: قم بإجراء فحوصات الجودة محلياً
npm run lint         # فحص التنسيق + أخطاء JavaScript
npm run format       # تنسيق تلقائي للكود
```

### الخطوة 6: التدريج والالتزام

```bash
# انظر ما هي الملفات التي تغيرت
git status

# أضف تغييراتك إلى التدريج
git add .
# أو أضف ملفات محددة:
git add index.html
git add css/custom.css

# التزم برسالة واضحة
git commit -m "type: brief description"

# أمثلة:
git commit -m "fix: correct typo in hero section"
git commit -m "feat: add testimonials section"
git commit -m "docs: update contributing.ar guide"
```

### الخطوة 7: ادفع إلى الـ Fork الخاص بك

```bash
# ادفع فرعك إلى الـ fork الخاص بك
git push origin your-feature-name

# مثال:
git push origin fix/typo-in-hero
```

### الخطوة 8: إنشاء طلب سحب

1. اذهب إلى **الـ fork الخاص بك** على GitHub
2. سترى لافتة صفراء: **"Compare & pull request"** - انقر عليها
3. املأ قالب طلب السحب:
   - أضف عنواناً واضحاً
   - صف ما غيرته ولماذا
   - أضف لقطات شاشة إذا غيرت واجهة المستخدم
   - أكمل قائمة التحقق
4. انقر على **"Create pull request"**

### الخطوة 9: الرد على المراجعة

- سيقوم مشرف بمراجعة طلب السحب الخاص بك
- قد يطلبون تغييرات
- قم بإجراء التغييرات في نفس الفرع
- ادفع مرة أخرى - يتم تحديث طلب السحب تلقائياً

```bash
# قم بإجراء التغييرات المطلوبة
# ثم:
git add .
git commit -m "fix: address review comments"
git push origin your-feature-name
```

### الخطوة 10: احتفل! 🎉

بمجرد الموافقة، سيتم دمج طلب السحب الخاص بك. أنت الآن مساهم!

---

## 📝 اتفاقية رسائل الالتزام

نستخدم **الالتزامات التقليدية** للحفاظ على تاريخنا نظيفاً ومتسقاً.

### التنسيق

```
<type>: <brief description>
```

### الأنواع

| النوع        | استخدم عندما                            | مثال                                     |
| ------------ | --------------------------------------- | ---------------------------------------- |
| **feat**     | إضافة ميزة جديدة                        | `feat: add mobile menu`                  |
| **fix**      | إصلاح خطأ                               | `fix: correct footer spacing`            |
| **docs**     | التوثيق فقط                             | `docs: update readme`                    |
| **style**    | تنسيق الكود (بدون تغيير المنطق)         | `style: format with prettier`            |
| **refactor** | تنظيف الكود (بدون تغيير الميزة)         | `refactor: simplify navigation code`     |
| **test**     | إضافة اختبارات                          | `test: add navigation tests`             |
| **chore**    | مهام الصيانة                            | `chore: update dependencies`             |

### أمثلة

✅ **رسائل التزام جيدة:**

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve mobile menu not closing"
git commit -m "docs: add setup instructions"
git commit -m "style: improve button hover effects"
```

❌ **رسائل التزام سيئة:**

```bash
git commit -m "updates"
git commit -m "fix stuff"
git commit -m "changes"
git commit -m "final version"
```

### القواعد

- ابدأ بحرف صغير
- لا نقطة في النهاية
- أبقِها أقل من 50 حرفاً
- كن محدداً حول ما تغير

---

## 📝 إرشادات خاصة بالتجريب

### استخدم Tailwind CSS

فضّل فئات الأدوات المساعدة لـ Tailwind على CSS المخصص:

```html
✅
<div class="bg-primary-500 text-white px-6 py-3 rounded-lg">
  ❌
  <div class="my-custom-button"></div>
</div>
```

### ألوان العلامة التجارية

استخدم دائماً ألوان العلامة التجارية لمجتمع المبرمجين الموريتانيين:

- `bg-primary-500` - أخضر MPC (#00A859)
- `bg-golden-500` - ذهبي MPC (#FFD700)

### قائمة فحص الاختبار

قبل تقديم طلب السحب الخاص بك:

- [ ] تم الاختبار في المتصفح - لا أخطاء
- [ ] تم الاختبار على الهاتف المحمول (عرض 375px)
- [ ] لا أخطاء في وحدة التحكم (F12)

---

## 🎯 مشاكل أولى جيدة

ابحث عن المشاكل المصنفة:

- `good first issue` - مثالية للمبتدئين
- `beginner-friendly` - مهام بسيطة
- `documentation` - لا يلزم برمجة

---

## 💡 ما الذي يجب المساهمة به

### سهل (30 دقيقة)

- إصلاح الأخطاء الإملائية
- تحديث محتوى النص
- إضافة نص بديل للصور
- تحديث التوثيق

### متوسط (1-2 ساعة)

- إضافة أقسام جديدة
- تحسينات التصميم
- إنشاء بطاقات/مكونات
- إضافة أيقونات

### متقدم (2+ ساعات)

- ميزات JavaScript
- إصلاحات إمكانية الوصول
- تحسينات الأداء

---

## 🐛 وجدت خطأ؟

1. [افتح مشكلة](../../issues/new?template=bug_report.md)
2. استخدم قالب تقرير الخطأ
3. قم بتضمين لقطات الشاشة
4. صف خطوات إعادة الإنتاج

---

## 💬 تحتاج مساعدة؟

- **WhatsApp**: [انضم إلى أكثر من 600 عضو](https://chat.whatsapp.com/L13JBkYOBXqK9p8FYZE00x)
- **المناقشات**: [اطرح الأسئلة](../../discussions)
- **المشاكل**: [احصل على المساعدة](../../issues/new?template=beginner_help.md)

---

## 📁 هيكل المشروع

```
demo-repository/
├── index.html              # الصفحة الرئيسية (حرر هذا!)
├── css/custom.css          # أنماط مخصصة
├── js/app.js               # ميزات JavaScript
├── assets/images/          # الصور والشعار
└── docs/                   # التوثيق
```

---

## ✅ قبل تقديم طلب السحب

- الكود يعمل بشكل صحيح
- تم الاختبار على سطح المكتب والهاتف المحمول
- لا أخطاء في وحدة التحكم
- يتبع نمط الكود الحالي

---

**هذا كل شيء!** لا تفكر كثيراً - فقط قم بإجراء تغييرك، اختبره، وأرسله. نحن هنا لمساعدتك على التعلم! 🇲🇷💻

للحصول على إرشادات مفصلة، راجع [دليل المساهمة الرئيسي لمجتمع المبرمجين الموريتانيين](https://github.com/Mauritania-Programmers-Community/.github/blob/main/CONTRIBUTING.ar.md).