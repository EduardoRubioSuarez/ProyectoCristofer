<?php
/**
 * Script para procesar el formulario de contacto de ISA'S Marketing
 * Permite recibir datos vía POST (JSON o Form Data) y enviarlos por correo
 * con formato HTML 100% personalizable.
 */

// Permitir peticiones desde cualquier origen (útil si el frontend y backend están separados, aunque aquí estarán en el mismo dominio)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Manejar la petición pre-flight de CORS (OPTIONS)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

// Solo aceptar peticiones POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Intentar leer datos como JSON (como los envía fetch por defecto en React)
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Si no es JSON, intentar con $_POST estándar
    if (!$data) {
        $data = $_POST;
    }

    // Sanitizar y recoger las variables
    $nombre = strip_tags(trim($data["nombre"] ?? ""));
    $email = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($data["telefono"] ?? "No especificado"));
    $servicio = strip_tags(trim($data["servicio_interes"] ?? ""));
    $mensaje = strip_tags(trim($data["mensaje"] ?? ""));

    // Validar campos requeridos
    if (empty($nombre) || empty($email) || empty($servicio) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Por favor completa todos los campos obligatorios correctamente."
        ]);
        exit;
    }

    // Configuración del correo:
    $to = "info@isasmkt.com"; // A donde llegarán los correos (puedes cambiarlo)
    $subject = "🔥 Nuevo Lead: $nombre - ISA'S Marketing";

    // ✅ AQUÍ PUEDES PERSONALIZAR EL DISEÑO DEL CORREO (CSS Y HTML)
    $email_content = "
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Nuevo Lead - Landing Page</title>
      <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #DFDFE2; 
            background-color: #000c14; 
            margin: 0;
            padding: 20px;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #001f2e;
            border: 1px solid #00dee6; 
            border-radius: 8px; 
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 222, 230, 0.15);
        }
        .header { 
            background: linear-gradient(90deg, #001f2e 0%, #00dee6 100%); 
            color: #000c14; 
            padding: 20px; 
            text-align: center; 
            font-size: 24px;
            font-weight: bold; 
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .content { 
            padding: 30px; 
        }
        .field { 
            margin-bottom: 20px; 
            border-bottom: 1px solid rgba(0, 222, 230, 0.2);
            padding-bottom: 10px;
        }
        .label { 
            font-weight: bold; 
            color: #00dee6; 
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            font-size: 16px;
            color: #ffffff;
        }
        .footer {
            background-color: #000c14;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: rgba(223, 223, 226, 0.6);
            border-top: 1px solid rgba(0, 222, 230, 0.2);
        }
      </style>
    </head>
    <body>
      <div class='container'>
        <div class='header'>NUEVO MENSAJE DE CONTACTO</div>
        <div class='content'>
          <div class='field'>
            <span class='label'>👤 Nombre del Contacto</span>
            <div class='value'>$nombre</div>
          </div>
          <div class='field'>
            <span class='label'>📧 Correo Electrónico</span>
            <div class='value'><a href='mailto:$email' style='color:#00dee6; text-decoration:none;'>$email</a></div>
          </div>
          <div class='field'>
            <span class='label'>📱 Teléfono</span>
            <div class='value'>$telefono</div>
          </div>
          <div class='field'>
            <span class='label'>🎯 Servicio de Interés</span>
            <div class='value'>$servicio</div>
          </div>
          <div class='field'>
            <span class='label'>💬 Mensaje / Detalles del Proyecto</span>
            <div class='value' style='background:rgba(0,0,0,0.3); padding:15px; border-radius:4px; margin-top:10px; white-space:pre-wrap; border-left:3px solid #00dee6;'>".htmlspecialchars($mensaje)."</div>
          </div>
        </div>
        <div class='footer'>
            Este mensaje fue enviado desde el formulario de contacto de la página web ISA'S Marketing Digital.
        </div>
      </div>
    </body>
    </html>
    ";

    // Cabeceras para enviar correo en formato HTML
    $domain = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'isasmkt.com';
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    // Es importante que el 'From' use el dominio de tu hosting para evitar caer en Spam
    $headers .= "From: Formulario Web <noreply@$domain>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Intentar enviar el correo
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode([
            "status" => "success", 
            "message" => "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "Ocurrió un error al intentar enviar el mensaje por correo. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp."
        ]);
    }
} else {
    // Si la petición no es POST
    http_response_code(403);
    echo json_encode([
        "status" => "error", 
        "message" => "Acceso denegado. Se requiere método POST."
    ]);
}
?>
